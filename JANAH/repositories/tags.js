
const { Tag } = require('../models');
const moment = require('moment');
const Sequelize = require('sequelize');

module.exports = {

	async getAllTags(){
		return await Tag.findAndCountAll({
			attributes: ['id', 'name']
		});
	},

	async getTagById(id) {
		return await Tag.findOne({
			where:{ id },
			attributes: ['id', 'name']
		});
	},

	async addTag(tag) {
		try {
		  return await Tag.create({ // Tags.findOrCreate
		  		name: tag.name,
		  		createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
		  });
		} catch (error) {
		  	console.log(error.errors)
			tag.error = error.message;
			return tag;
		}
	},

	async updateTag(tags) {
		try {
			const [ updated ] = await Tag.update({
				name: tags.name,
				updatedAt : moment().format("YYYY-MM-DD HH:mm:ss")
				}, {where: { id: tags.id }
			});
			if (updated) {
				const updatedTags = await Tag.findOne({ where: tags.id });
				return updatedTags;
			}
			return {error: `Tags with id=${tags.id} doesn't exists.`}		
		} catch(error) {
			console.log(error.message);
			return {error: error.message}		
		}

	},

	async deleteTag(id) {
		try {
			const deleted = await Tag.destroy({ where: { id	} });
			if (deleted) {
				return {message:"Tag deleted!"}
			}
			return {error: `Tag with id=${id} doesn't exists.`}		
		} catch(error) {
			console.log(error.message);
			return {error: error.message}		
		}
	},
}
