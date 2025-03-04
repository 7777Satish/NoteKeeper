const express = require('express');
const pool = require('../config/db');
const api = express.Router();

api.get('/', async (req,res)=>{
    const data = await pool.query('select * from users');
    res.json(data.rows);
})

module.exports = api;