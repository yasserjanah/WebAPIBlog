
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const secretKey = fs.readFileSync(path.join(__dirname, "./rs256-4096-private.rsa"));
	
const authCheck = (req, res, next) => {
	jwt({
		secret: secretKey, algorithms: ['HS256'], credentialsRequired: false,
		getToken: (req) => {
		    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
		        return req.headers.authorization.split(' ')[1];
		    } else if (req.query && req.query.token) {
		      return req.query.token;
		    } else if (req.cookies && req.cookies.token){
		    	return req.cookies.token
		    }
		    return null;
		  }
	})(req, res, function(err){
		if (err) { 
			if (err.name == "UnauthorizedError") return res.status(401).json({error: "Invalid Token"})
			return res.status(500).json({error: "500 Internal Server Error"})
		}
	    if (!req.user) return res.status(401).json({error: "You must be logged In to access this page."});
	    if(req.user.role == "guest") return res.status(401).json({error: "You are Unauthorized to access this page."});
	    next();
	});


}

const createToken = (user) => {
	const token = jsonwebtoken.sign({ id:user.id, username:user.username, email:user.email, role:user.role }, secretKey, { expiresIn: '1d' });
	return token;
}

const isValidToken = (req, res, next) => {
	jwt({
		secret: secretKey, algorithms: ['HS256'], credentialsRequired: false,
		getToken: (req) => {
		    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
		        return req.headers.authorization.split(' ')[1];
		    } else if (req.query && req.query.token) {
		      return req.query.token;
		    } else if (req.cookies && req.cookies.token){
				return req.cookies.token
		   	}
		    return null;
		  }
	})(req, res, function(err){
		if (err) { 
			if (err.name == "UnauthorizedError") return res.status(200).json({error: "Invalid Token"})
			return res.status(500).json({error: "500 Internal Server Error"})
		}
	    if (!req.user) return res.status(200).json({error: "Invalid Token"});
	    return res.status(200).json({message: "Token is valid.", username: req.user.username, id:req.user.id});
	});
}

module.exports = { authCheck, createToken, isValidToken };
