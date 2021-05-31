var express = require('express');
var router = express.Router();

const usersRepo = require('../repositories/users');

router.get('/', async function(req, res, next) {
	let response = await (req.query.offset && req.query.limit) ? usersRepo.getUsers(req.query.offset, req.query.limit) : usersRepo.getAllUsers()
  	res.send(await response);
});

router.get('/:id', async function(req, res, next) {
  	res.send(await usersRepo.getUser(req.params.id));
});

router.post('/', async function(req, res, next) {
  	let user = {};
  	user.username = req.body.username;
  	user.email = req.body.email;
  	user.password = req.body.password;
  	user.role = req.body.role;
  	res.send(await usersRepo.addUser(user));
});

router.put('/', async function(req, res, next) {
  	let user = {};
  	user.username = req.body.username;
  	user.email = req.body.email;
  	user.password = req.body.password;
  	user.role = req.body.role;
  	res.send(await usersRepo.updateUser(user));
});

router.delete('/:id', async function(req, res, next) {
  	res.send(await usersRepo.deleteUser(req.params.id));
});

module.exports = router;
