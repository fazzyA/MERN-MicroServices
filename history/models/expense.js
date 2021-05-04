const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    title: {type:String, required:[true, "title is missing"] },
    description: String,
    user: String,
    img: String,
    category: String,
    date: {
        type: Date,
        default: new Date()
    }
    
})
const Expense = mongoose.model('Expense', expenseSchema)
module.exports = Expense