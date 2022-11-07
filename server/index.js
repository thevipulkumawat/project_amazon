// printing hello world
console.log("hello, world");
// HOW TO IMPORTS THINGS IN NODE. AS WE import 'package:flutter/material.dart';
const express = require('express');

const PORT = 3000;

const app = express();
// CREATE AN API
// GET, PUT, POST, DELETE UPDATE --> CRUD(CREATE, READ, UPDATE, DELETE).
app.get('/hello-world', (req, res) => {
        //res.send('hello world');
        res.json({hi: 'hello world'});
})


app.listen(PORT, "0.0.0.0", () => {
 console.log(`connected at port ${PORT}`);
});


