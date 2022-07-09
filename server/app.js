const express = require("express")
const app = express()
const PORT = 5000;
const mongoose = require("mongoose")
const config = require("./config/key.js")
const bcrypt = require("bcrypt")
const cookieParser = require("cookie-parser")
const { auth } = require("./middleware/auth")
const { User } = require("./models/User");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())

mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB 연결중...'))
  .catch(err => console.log(err))
   
  
app.get("/api/hello", (req,res)=>{
	res.send("qweqwe")
})

app.post('/api/users/register', (req, res) => {

  const user = new User(req.body)
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

app.post("/api/users/login",(req,res)=>{
	User.findOne({ email:req.body.email}, (err, userinfo)=>{
		if(!userinfo){
			return res.json({
				loginSuccess:false,
				message:"유저 정보 없음"
			})
		}	
		
		
		
		userinfo.comparePassword(req.body.password,(err,isMatch)=>{
			if(!isMatch) return res.json({loginSuccess:false, message:"비번 틀림"})
			
			userinfo.generateToken((err,user)=>{
				if(err) return res.status(400).send(err)
				res.cookie("x_auth", user.token)
				.status(200)
				.json({loginSuccess:true, userId:user._id})
			})
		})
	})
})


app.get("/api/users/auth",auth,(req,res)=>{
	res.status(200).json({
		_id:req.user._id,
		isAdmin:req.user.role === 0 ? false : true,
		isAuth: true,
		email:"req.user.email",
		name:"req.user.name",
		image:req.user.image
	})
})


app.get("/api/users/logout", auth, (req,res)=>{
	
	User.findOneAndUpdate({_id:req.user._id},	
	{token:""},
	(err, user) =>{
		if(err) return res.json({ success:false, err})
		return res.status(200).send({
			success:true
		}) 
	})
	
	
})


app.listen(PORT,()=>console.log(`${PORT}번 포트에서 서버 가동중..`))






    
