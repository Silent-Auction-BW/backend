const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authRouter = require('../endpoints/auth');
const itemsRouter = require('../endpoints/items');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());


server.use('/', authRouter)

module.exports = server;
