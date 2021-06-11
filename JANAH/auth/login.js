const express = require('express');
const router = express.Router();
const usersRepo = require('../repositories/users');
const expressJWT = require('express-jwt');
const jwt = require('jsonwebtoken');
const { createToken } = require('./auth')

router.post('/login', async function(req, res, next) {
	// Authenticate user
	const { email, password } = req.body;
	const user = await usersRepo.getUserWithPasswordByEmail(email);
	var isValid = false;
	const check = await usersRepo.validPassword(password, user.password)
	if (user.password.startsWith('$2b$08$')){
		if(check) isValid = true;
	} else {
		if (password === user.password) isValid = true;
	}
	if (user && isValid){
		const token = createToken(user);
		console.log(token)
		res.cookie("janah_token", token, { httpOnly: true, secure: true}); // send the token in the cookie (and make it httpOnly)
		return res.status(200).json({token:token})
	}
	
	res.status(401).json({error: "email / password is Incorrect !"})
});

module.exports = router;
