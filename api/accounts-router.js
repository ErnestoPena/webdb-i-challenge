const express = require('express');
const db = require('../data/dbConfig');
const accountRouter = express.Router();


//Method to obtain all accounts
accountRouter.get('/' , async (req,res) => {
    try {
        const getAll = await db('accounts');
        res.status(200).json(getAll);
    }
    catch (err) {
        res.status(500).json({message: 'There was a problem with the request'});
    }
})

//Method to obtain a single account
accountRouter.get('/:id' , async (req,res) =>{
    try {
        const { id } = req.params.id;
        const accountById = await db('accounts').where('id' , '=' , `${id}` )
        res.status(200).json(accountById);
    }
    catch (err) {
        res.status(500).json({message: 'There was a problem with your request'})
    }
})

accountRouter.post('/' , async (req , res) => {
    try {
        const accountBody = req.body;
        const newAccount = await db('accounts').insert(accountBody);
        res.status(200).json(newAccount);
    }
    catch (err) {
        res.status(500).json({message: 'There was a problem with your request'});
    }
})

//Method to update a record
accountRouter.put('/:id' , async (req , res) => {
    try {
        const updatedAccount = req.body;
        console.log(updatedAccount)
        const id = req.params.id;
        console.log(id)
        const myUpdatedAccount = await db('accounts').where('id' , '=' , id).update(updatedAccount);
        res.status(203).json(myUpdatedAccount);
    }
    catch (err) {
        res.status(500).json({message: 'There was a problem with your request'})
    }
})

//Method to delete a single account
accountRouter.delete('/:id' , async (req , res) => {
    try {
        const id = req.params.id
        const deletedAccount = await db('accounts').where('id' , '=' , id).del();
        res.status(200).json(deletedAccount);
    }
    catch (err) {
        res.status(500).json({message: 'There was a problem with your account'});
    }
})



//Stretch problem
accountRouter.get('/' , async (req , res) => {
    const querystring = {
        
    }
})

module.exports = accountRouter