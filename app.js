const express = require("express")
const app = express()
const PORT = 3000;
const mongoose = require("mongoose")
const config = require("./config/key.js")

const { User } = require("./models/User");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB 연결중...'))
  .catch(err => console.log(err))


app.get("/",(req,res)=>{
    res.send("Hello wwwWorld~~!")
})


app.post('/register', (req, res) => {

  const user = new User(req.body)
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(PORT,()=>console.log(`${PORT}번 포트에서 서버 가동중..`))






    
