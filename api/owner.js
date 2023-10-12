// Setup Sign up and Login API for Owner
import express from "express";
import prisma from "./lib/index.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const SECRET_KEY = process.env.SECRET_KEY 
const router = express.Router();

//signup
router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const exstingOwner = await prisma.owner.findUnique({
            where: {
                email: email,
            },
        });

        if (exstingOwner) {
            return res.status(409).json({
                message: "Owner already exists",
            });
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create the owner
        const newOwner = await prisma.owner.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
            },
        });

        res.status(201).json({
            message: "Owner created successfully",
            owner: newOwner,
        });
    } catch (err) {
        res.status(500).json({
            message: "something went wrong",
            err: err.message,
        });
    }
});

// login
router.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        // find the owner
        const exstingOwner = await prisma.owner.findUnique({
            where: {
                email: email
            }
        })

        if (!exstingOwner) {
            return res.status(404).json({ message: 'Owner not found' })
        }

        // compare the password 
        const isPasswordCorrect = await bcrypt.compare(password, exstingOwner.password)

        if (!isPasswordCorrect) {
            return res.status(401).json({ message: 'incorrect password' })
        }

        // create token
        const token = jwt.sign(
            { id: exstingOwner.id, email: exstingOwner.email },
            SECRET_KEY,
            { expiresIn: '1h' }
        )

        return res.status(200).json({
            message: 'owner logedd successful',
            token: token
        })
    }
    catch (err) {
        res.status(500).json({
            message: "something went wrong",
            err: err.message,
        });
    }
})

export default router;
