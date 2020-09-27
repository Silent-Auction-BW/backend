const express = require("express");
const cors = require("cors");
const session = require("express-session")
const helmet = require("helmet");
const authRouter = require('../endpoints/auth');
const itemsRouter = require('../endpoints/items');
const sellersRouter = require('../endpoints/seller');

const server = express();

server.use(helmet());
server.use(cors());
// server.use(session({
//     resave: false, // avoid recreating sessions that have not changed
//     saveUninitialized: false, // to comply with GDPR laws
//     secret: "keep it secret, keep it safe", // cryptographically sign the cookie
//     store: new KnexSessionStore({
//         knex: db, // configured instance of knex
//         createtable: true, // if the sessions table doesn't exist, create it automatically
//     }),
// }))
// server.use(express.json());
server.use(express.json({limit: '50mb'}));
server.use(express.urlencoded({limit: '50mb'}));


server.use('/', authRouter)
server.use('/', itemsRouter)
server.use('/', sellersRouter)

module.exports = server;
