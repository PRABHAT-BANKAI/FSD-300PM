const express = require("express")
require('dotenv').config()
const app = express()


app.get("/",(req,res)=>{

  return res.status(201).json({
    message:"welcome to server"
  })
})


app.listen(process.env.PORT,(error)=>{
  if(error){
    console.log("server is not running")
    return
  }
  console.log("server is running ",process.env.PORT)
})