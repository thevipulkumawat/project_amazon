// printing hello world
console.log("hello, world");
// HOW TO IMPORTS THINGS IN NODE. AS WE import 'package:flutter/material.dart';
const express = require('express');

const PORT = 3000;

const app = express();



app.listen(PORT, "0.0.0.0", () => {
 console.log(`connected at port ${PORT}`);
});


