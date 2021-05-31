const { User } = require('../models');

const moment = require('moment');

module.exports = {

	async getAllUsers(){
		return await User.findAll({
			attributes: ['id', 'username', 'email', 'role'] // don't send users' passwords
		});
	},

	async getUsers(offset = 0, limit = 10) {
		return await User.findAll({ offset: parseInt(offset), limit: parseInt(limit),
			attributes: ['id', 'username', 'email', 'role'] // don't send users' passwords
		});
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

	async getUser(id) {
		return await User.findOne({
			where:{ id },
			attributes: ['id', 'username', 'email', 'role'] // don't send user passwords
		});
	},

	async getUserByEmail(email) {
		return await User.findOne({
			where:{ email: email },
			attributes: ['id', 'username', 'email', 'role'] // don't send user passwords
		});
	},

	async addUser(user) {
		try {
		  return await User.create({
		  		username: user.username,
		  		email: user.email,
		  		password: user.password,
		  		role: user.role,
		  		createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
		  });
		} catch (error) {
		  	console.log(error.errors)
			user.error = `User with ${error.errors[0].path} '${error.errors[0].value}' already exists !`;
			return user;
		}
	},

	async updateUser(user) {
		const updated  = await User.update({
			username: user.username, password: user.password, role: user.role,
			updatedAt : moment().format("YYYY-MM-DD HH:mm:ss")
		  }, {where: { email: user.email }});
		user.message = (updated == 1) ? "User updated!" : "failed to updated User";
		return user;
	},

	async deleteUser(id) {
		// TODO : admins can only delete users
		let user = await this.getUser(id);
		if (user !=  null){
			const deleted = await User.destroy({
				where: { id	}
			});
			let response = {}
			response.id = user.id;
			response.username = user.username;
			response.email = user.email;
			response.role = user.role;
			response.message = (deleted == 1 ) ? "User Deleted!" : "Failed to delete User !"
			return response;
		}
		return {error : `User with id '${id}' is not exists !!`}
	},

}
