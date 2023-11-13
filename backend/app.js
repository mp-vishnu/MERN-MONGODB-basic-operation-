const express=require('express');
const app=express(); // creating an instance
app.use(express.json()); //req response format

//route imports
const student=require("./router/studentRouter");

app.use("/",student);
module.exports=app;