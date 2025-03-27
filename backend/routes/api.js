const express = require('express');
const User = require('../models/userModel');

const api = express.Router();

api.get('/', async (req,res)=>{
    // const data = await db.query('select * from users');
    // res.json(data.rows);
    res.send("Hi");
})

api.post('/createUser', async (req,res)=>{
    try{
        const {username, password, fullname} = req.body;
        const result = await User.create(username, password, fullname);
        res.json({done:true});
    } catch(errpr){
        console.error("Error creating user:", error);
        res.status(500).json({ done: false, error: error.message });
    }
})

module.exports = api;