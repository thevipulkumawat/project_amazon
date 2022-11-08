// IMPORTS from packages
const express = require('express');
const mongoose = require('mongoose');
// IMPORTS from other files
const authRouter = require("./routes/auth");

//INIT
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://thevipulkumawat:orqrtrwopw@cluster0.nm3bwio.mongodb.net/?retryWrites=true&w=majority"
//middleware
app.use(authRouter);

// Connections
mongoose
.connect(DB)
.then(() => {
console.log("Connection Successful");
}).catch((e) => {
console.log(e);
});


app.listen(PORT, () => {
 console.log(`connected at port ${PORT}`);
});


