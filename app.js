const express = require("express")
const app = express()
const PORT = 3000;
const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://jongseok:852456a@cluster0.oit5f.mongodb.net/?retryWrites=true&w=majority', {


}).then(() => console.log('MongoDB 연결중...'))
  .catch(err => console.log(err))


app.get("/",(req,res)=>{
    res.send("Hello wwwWorld~~!")
})

app.listen(PORT,()=>console.log("wqeqwe"))






    
