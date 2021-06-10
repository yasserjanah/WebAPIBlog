const { Article } = require('../models');
const { User } = require('../models');
const { _getArticleComments } = require('./comments')
const moment = require('moment');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {

	async getAllArticles(){
		return await Article.findAndCountAll({
			where:{ published : true },
			attributes: ['id', 'title', 'content', 'createdAt'],
			include: [
		        {
		          model: User,
		          attributes: ['id', 'username', 'email']
		        }
		      ]
		});
	},

	async getArticle(id) {
		return await Article.findOne({
			where:{ id, published : true },
			attributes: ['id', 'title', 'content', 'createdAt'],
			include: [
		        {
		          model: User,
		          attributes: ['id', 'username', 'email']
		        }
		      ]
		});
	},

	async _getUserArticles(id) {
		return await Article.findAndCountAll({
			where:{ UserId:id },
			attributes: ['id', 'title', 'content', 'createdAt']
		});
	},

	async getArticleComments(id) {
		return await _getArticleComments(id);
	},
	
	async addArticle(article) {
		try {
		  return await Article.create({ // Article.findOrCreate
		  		title: article.title,
		  		content: article.content,
		  		published: article.published,
		  		UserId: 1, // for test only
		  		createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
		  });
		} catch (error) {
		  	console.log(error.errors)
			article.error = `${error.errors[0].message.split(".")[1]} !`;
			return article;
		}
	},

	async updateArticle(article) {
		try {
			const [ updated ] = await Article.update({
				title: article.title,
				content: article.content,
				published: article.published,
				updatedAt : moment().format("YYYY-MM-DD HH:mm:ss")
				}, {where: { id: article.id }
			});
			if (updated) {
				const updatedArticle = await Article.findOne({ where: article.id });
				return updatedArticle;
			}
			return {error: `Article with id=${article.id} doesn't exists.`}		
		} catch(error) {
			console.log(error.message);
			return {error: error.message}		
		}

	},

	async deleteArticle(id) {
		try {
			const deleted = await Article.destroy({ where: { id	} });
			if (deleted) {
				return {message:"Article deleted!"}
			}
			return {error: `Article with id=${id} doesn't exists.`}		
		} catch(error) {
			console.log(error.message);
			return {error: error.message}		
		}
	},
}
