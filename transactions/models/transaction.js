const mongoose = require('mongoose');

const transSchema = mongoose.Schema({
    book: {type:String },
    category: String,
    userID: String,
    userName: String,
    date: {
        type: Date,
        default: new Date()
    }
    
})
const Task = mongoose.model('Task', transSchema)
module.exports = Task