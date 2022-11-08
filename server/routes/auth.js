const express = require('express');
const User = require('../models/user');

const authRouter = express.Router();

authRouter.post('/api/signup', (req, res) => {
   // getting data from client side
    const {name, email, password} = req.body;

    const existingUser = User.findOne({email });
   // post that data in database


})

module.exports = authRouter;