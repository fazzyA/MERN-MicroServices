const express = require('express');
// const auth = require('../../middleware/auth');
const Task = require('../models/tasks')
const router = express.Router()

router.get('/', async (req, res) => {
    // get Tasks from Tasks
    const tasks = await Task.find().sort({createdAt:-1});
    res.json({
        success: true,
        status: 200, //ok
        data: tasks
    })
})


router.post('/add', async (req, res) => {
    try {
        const task = await Task.create(req.body)
        console.log(req.userData)
        res.json({
            success: true,
            status: 201,
            dbid: task._id
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
         const task = await Task.findByIdAndDelete(req.params.id);
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