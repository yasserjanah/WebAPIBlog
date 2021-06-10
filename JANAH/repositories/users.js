const { User } = require('../models');
const { _getUserArticles } = require('./articles');

const bcrypt = require('bcrypt');
const moment = require('moment');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {

	async getAllUsers(){
		return await User.findAndCountAll({
			attributes: ['id', 'username', 'email', 'role'] // don't send users' passwords
		});
	},

	async getUsers(offset = 0, limit = 0) {
		if (parseInt(limit) < 0 || parseInt(offset) < 0){
			return this.getAllUsers()
		}
		return await User.findAndCountAll({ offset: parseInt(offset), limit: parseInt(limit),
			attributes: ['id', 'username', 'email', 'role'] // don't send users' passwords
		});
	},

	async getUserArticles(id){
		return await _getUserArticles(id);
	},

	async getAdmins() {
		return await User.findAll({
			where:{ role: "admin" },
			attributes: ['id', 'username', 'email', 'role'] // don't send users' passwords
		});
	},

	async getAuthors() {
		return await User.findAll({
			where:{ role: "author" },
			attributes: ['id', 'username', 'email', 'role'] // don't send users' passwords
		});
	},

	async getGuests(){
		return await User.findAll({
			where:{ role: "guest" },
			attributes: ['id', 'username', 'email', 'role'] // don't send users' passwords
		});
	}, 

	async getUserById(id) {
		return await User.findOne({
			where:{ id },
			attributes: ['id', 'username', 'email', 'role'] // don't send user passwords
		});
	},

	async getUserByUsername(username) {
		return await User.findOne({
			where:{ username: { [Op.like] : `%${username}%`} },
			attributes: ['id', 'username', 'email', 'role'] // don't send user passwords
		});
	},

	async getUserByEmail(email) {
		return await User.findOne({
			where:{ email: { [Op.like] : `%${email}%`} },
			attributes: ['id', 'username', 'email', 'role'] // don't send user passwords
		});
	},
	
	async getUserWithPasswordByEmail(email) {
		return await User.findOne({
			where:{ email: { [Op.like] : `%${email}%`} },
			attributes: ['id', 'username', 'email', 'password', 'role'] // don't send user passwords
		});
	},

	generateHash(password) {
		return bcrypt.hash(password, bcrypt.genSaltSync(8));
	},
	
	async addUser(user) {
		try {
		  return await User.create({ // User.findOrCreate
		  		username: user.username,
		  		email: user.email,
		  		password: generateHash(user.password_1),
		  		role: user.role,
		  		createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
		  });
		} catch (error) {
		  	console.log(error.errors)
			// user.error = `User with ${error.errors[0].path} '${error.errors[0].value}' already exists !`;
			user.error = error.message;
			return user;
		}
	},

	async updateUser(user) {
		const _user = await this.getUserWithPasswordByEmail(user.email);
		if (_user && _user.validPassword(password)){ // check if current password equal to what user typed
			const updated  = await User.update({
				username: user.username, password: generateHash(user.new_password), role: user.role,
				updatedAt : moment().format("YYYY-MM-DD HH:mm:ss")
			  }, {where: { email: user.email }});
			user.done = updated;
			return user;
		}
		user.error = "current password is not correct";
		return user
	},

	async deleteUser(id) {
		// TODO : admins can only delete users
		try {
			const deleted = await User.destroy({ where: { id	} });
			if (deleted) {
				return {message: "User deleted!"}
			}
			return {error:`User with id '${id}' is not exists !!`}
		} catch(error) {
			console.log(error.message);
			return {error: error.message}
		}
	},

}
