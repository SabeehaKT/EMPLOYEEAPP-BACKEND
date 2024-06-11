const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const employee = require("./models/employee")

const app = express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.post("/view",(req,res)=>{
    res.send("Welcome to my contact page")
})

app.post("/add",(req,res)=>{
    res.send("test")
})

app.listen(8082,()=>{
    console.log("Server started")
})