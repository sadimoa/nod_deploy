import express, {json} from "express";
import ownerRouter from './owner.js'
import authorRouter from './authors.js'
import bookStoreRouter from './bookstores.js'
import bookRouter from './books.js'

const server = express()

server.use(json())
server.use('/api/owner', ownerRouter)
server.use('/api/authors', authorRouter)
server.use('/api/bookstore', bookStoreRouter)
server.use('/api/book', bookRouter)



export default server