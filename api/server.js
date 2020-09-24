const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authRouter = require('../endpoints/auth');
const itemsRouter = require('../endpoints/items');
const sellersRouter = require('../endpoints/seller');

const server = express();

server.use(helmet());
server.use(cors());
// server.use(express.json());
server.use(express.json({limit: '50mb'}));
server.use(express.urlencoded({limit: '50mb'}));


server.use('/', authRouter)
server.use('/', itemsRouter)
server.use('/', sellersRouter)

module.exports = server;
