const express = require('express');
const accountsDb = require('../data/accountsdb');
const accountRouter = express.Router();

accountRouter.get('/' , async (req,res) => {
    try {
        const getAll = await accountsDb.get();
        res.status(200).json(getall);
    }
    catch (err) {
        res.status(500).json({message: 'There was a problem with the request'});
    }
})




module.exports = accountRouter