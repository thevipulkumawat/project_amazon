const express = require('express');
const User = require('../models/user');

const authRouter = express.Router();

authRouter.post('/api/signup', async (req, res) => {
   // getting data from client side
    const {name, email, password} = req.body;

    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({msg: "User with same email is already exist!"});
    }

    let user = new User({
        email,
        password,
        name,
    });

    user = await user.save();
    res.json({user});
    // it will return status code of 400
   // post that data in database


});

module.exports = authRouter;