const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbConnect = require('./config/db.js');
var cors = require('cors')
const userRoute  = require('./routes/users.js')
// const dotenv = require('dotenv')
// dotenv.config();

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '50mb'}));

dbConnect();

const PORT = process.env.PORT || 4002

///Routes
app.use('/user', userRoute)
app.get('/test', (req,res)=>res.send('hello user'))

app.listen(PORT, (req,res)=>{
console.log('user server is running at', PORT)
})