const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbConnect = require('./config/db.js');
var cors = require('cors')
const taskRoute  = require('./routes/tasks.js')
const dotenv = require('dotenv')
dotenv.config();

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '50mb'}));

dbConnect();

const PORT = process.env.PORT || 4000

///Routes
app.use('/tasks', taskRoute)

app.listen(PORT, (req,res)=>{
console.log('server is running at', PORT)
})

