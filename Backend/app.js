const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./Routes/Book-Routes");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/books",router)

mongoose.connect("mongodb+srv://shubham:0uuqKHLZKjDgQUvA@cluster0.1nhqrfi.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Connected to DB"))
.then(()=>{
    app.listen(5000);
}).catch((err)=>{
    console.log(err);
});