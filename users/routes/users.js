const express = require('express');
// const auth = require('../../middleware/auth');
const User = require('../models/users')
const router = express.Router()

router.get('/', async (req, res) => {
    // get Users from Users
    const usrs = await User.find().sort({createdAt:-1});
    res.json({
        success: true,
        status: 200, //ok
        data: usrs
    })
})


router.post('/register', async (req, res) => {
    try {
        const usr = await User.create(req.body)
        res.json({
            success: true,
            status: 201,
            dbid: usr._id
        })
    } catch (error) {
        res.json({
            success: false,
            status: 400,
            error
        })
    }
})

router.post('/login', async (req, res) => {
    try {
        const usr = await User.findOne({email:req.body.email})
        if(usr.password==req.body.password) {
                    res.json({
            success: true,
            status: 201,
            msg: "User logged in successfully",
            dbid: usr._id,
            username: usr.name
        })

        } else{
            res.json({
                success:false,
                status:401,
                msg:'password not matched'
            })
        }
    } catch (error) {
        res.json({
            success: false,
            status: 400,
            error
        })
    }
})

router.post('/logout', async (req, res) => {
    try {
        //const usr = await User.find({email:req.body.email, password:req.body.password})
        res.json({
            success: true,
            status: 201,
            msg: "User logged out successfully",
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
         const usr = await User.findByIdAndDelete(req.params.id);
    res.json({
        success: true,
        status: 200, //ok
        msg: 'user is deleted successfully'
    })
   
    } catch (error) {
        console.log(error)
    }

})
module.exports = router