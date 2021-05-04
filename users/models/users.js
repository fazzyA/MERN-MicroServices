const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: {type: String, required:[true, "email is missing"] },
    password: String,
    date: {
        type: Date,
        default: new Date()
    }
    
})
const User = mongoose.model('User', userSchema)
module.exports = User