const express = require('express');
const accountsRouter = require('./api/accounts-router');
const db = require('./data/dbConfig.js');

const server = express();
const port = 5000;
server.use(express.json());

server.use('/accounts', accountsRouter);

server.get('/' , (req,res) => {
    res.status(200).send("<h2>This is the webdb-i-challenge from Ernesto</h2>");
})

server.listen( port , (req,res) =>{
    console.log(`Server Listening on port ${port}`)
})

module.exports = server;