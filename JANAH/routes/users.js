var express = require('express');
var router = express.Router();

const usersRepo = require('../repositories/users');

router.get('/', async function(req, res, next) {
	let response = await (req.query.offset && req.query.limit) ? usersRepo.getUsers(req.query.offset, req.query.limit) : usersRepo.getAllUsers()
  	res.status(200).send(await response);
});

router.get('/:value', async function(req, res, next) {
	const value = req.params.value;
	if (!isNaN(value)){
		res.status(200).send(await usersRepo.getUserById(value));
	}else if (/\b[a-z0-9-_.]+@[a-z0-9-_.]+(\.[a-z0-9]+)+/i.test(value)){
		res.status(200).send(await usersRepo.getUserByEmail(value));
	} else
		res.status(200).send(await usersRepo.getUserByUsername(value));
});

router.get('/:id/articles', async function(req, res, next) {
	res.send(await usersRepo.getUserArticles(req.params.id));
});

router.post('/', async function(req, res, next) {
  	let user = {};
  	user.username = req.body.username;
  	user.email = req.body.email;
  	user.password_1 = req.body.password_1;
  	user.password_2 = req.body.password_2;
  	user.role = req.body.role;
  	if (user.password_1 == user.password_2)
  		res.status(201).send(await usersRepo.addUser(user));
  	else
  		res.status(200).send({error: "password_1 doesn't equal password_2"})
});

router.put('/', async function(req, res, next) {
  	var user = {};
  	user.username = req.body.username;
  	user.email = req.body.email;
  	user.current_password = req.body.current_password;
  	user.new_password = req.body.new_password;
  	user.role = req.body.role;
  	res.status(200).send(await usersRepo.updateUser(user));
});

router.delete('/:id', async function(req, res, next) {
  	res.status(200).send(await usersRepo.deleteUser(req.params.id));
});

module.exports = router;
