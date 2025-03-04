const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

const api = require('./routes/api');
app.use('/api', api);

module.exports = app;