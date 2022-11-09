const express = require('express');
const User = require('../models/user');

const authRouter = express.Router();

authRouter.post('/api/signup', async (req, res) => {
   // getting data from client side
    const {name, email, password} = req.body;

    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.json
    }
   // post that data in database


})

module.exports = authRouter;