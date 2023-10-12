// set up token middleware here
import jwt from "jsonwebtoken";
import "dotenv/config";

const SECRET_KEY = process.env.SECRET_KEY;

function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ message: "authentication failed - missing token " });
  }

  const tokenWithoutBeare = token.split(" ")[1]

  // verify the token
  jwt.verify(tokenWithoutBeare, SECRET_KEY, (error, decoded) => {
    if (error) {
      return res
        .status(401)
        .json({ message: "authentication failed - invalid token" });
    }

    req.decoded = decoded;

    // continue the request
    next();
  });
}


export default authenticate