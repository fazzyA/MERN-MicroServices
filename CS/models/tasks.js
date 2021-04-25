const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: {type:String, required:[true, "title is missing"] },
    description: String,
    user: String,
    img: String,
    date: {
        type: Date,
        default: new Date()
    }
    
})
const Task = mongoose.model('Task', taskSchema)
module.exports = Task