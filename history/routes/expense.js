const express = require('express');
// const auth = require('../../middleware/auth');
const Expense = require('../models/expense')
const router = express.Router()

router.get('/', async (req, res) => {
    // get all expense from db
    const expenses = await Expense.find().sort({createdAt:-1});
    res.json({
        success: true,
        status: 200, //ok
        data: expenses
    })
})


router.post('/add', async (req, res) => {
    try {
        const expense = await Expense.create(req.body)
        console.log(req.userData)
        res.json({
            success: true,
            status: 201,
            dbid: expense._id
        })
    } catch (error) {
        res.json({
            success: false,
            status: 400,
            error
        })
    }
})


router.delete('/:id', async (req, res) => {
    try {
         const expense = await Expense.findByIdAndDelete(req.params.id);
    res.json({
        success: true,
        status: 200, //ok
        msg: 'post is deleted successfully'
    })
   
    } catch (error) {
        console.log(error)
    }

})
module.exports = router