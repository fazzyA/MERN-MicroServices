const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbConnect = require('./config/db.js');
var cors = require('cors')
const expenseRoute  = require('./routes/expense.js')
const dotenv = require('dotenv')
dotenv.config();

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dbConnect();

const PORT = process.env.PORT || 4000

///Routes
app.use('/history', expenseRoute)
app.get('/test', (req,res)=>res.send('hello world'))

app.listen(PORT, (req,res)=>{
console.log('history server is running at', PORT)
})

