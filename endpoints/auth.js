const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Users = require('../models/auth-model')
const restrict = require("../middleware/auth-middleware")

router.post('/register', async (req, res, next) => {
    try{
        const {username,password,role} = req.body
        const name = await Users.findBy({username})
  
        if (name){
          return res.status(409).json({
              message: "User is already taken"
          })
        }
		const newUser = await Users.add({
			username,
			// hash the password with a time complexity of "14"
			password: await bcrypt.hash(password, 14),
			role
		})

		res.status(201).json(newUser)
	} catch(err) {
		next(err)
	}
  // implement registration
});



router.post("/login", async (req, res, next) => {
	try {
		const { username, password, role } = req.body
		const user = await Users.findBy({ username })
		
		if (!user) {
			return res.status(401).json({
				message: "Invalid Credentials",
			})
		}
		

		const passwordValid = await bcrypt.compare(password, user.password)

		if (!passwordValid) {
		  return res.status(401).json({
			message: 'You shall not pass!!',
		  })
		}
	
		const payload = {
		  userId: user.id,
		  username: user.username,
		  userRole: user.role,
		}
	
		res.cookie('token', jwt.sign(payload, 'safe'))
		res.json({
		  message: `Welcome ${user.username}! your role is ${user.role}`,
		 
		})
	  } catch (err) {
		next(err)
	  }
	})
	

	router.get("/bidders", async (req,res,next)=>{
		try{
		  res.json(await Users.find())
		}catch(err){
			next(err)
		}
	  })
	  
	  


module.exports = router;