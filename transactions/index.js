const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbConnect = require('./config/db.js');
var cors = require('cors')
const taskRoute  = require('./routes/transaction.js')
// const dotenv = require('dotenv')
// dotenv.config();

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '50mb'}));

dbConnect();

const PORT = process.env.PORT || 4003

///Routes
app.use('/tr', taskRoute)
app.get('/test', (req,res)=>res.send('hello world'))

app.listen(PORT, (req,res)=>{
console.log('Transaction server is running at', PORT)
})