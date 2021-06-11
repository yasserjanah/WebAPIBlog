const { Article } = require('../models');
const { User } = require('../models');
const { _getArticleComments } = require('./comments')
const moment = require('moment');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {

	async getAllArticles(){
		return await Article.findAndCountAll({
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
			where:{ id },
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
			attributes: ['id', 'title', 'content', 'createdAt', 'UserId']
		});
	},

	async getArticleComments(id) {
		return await _getArticleComments(id);
	},

	async isUserArticle(aid, uid) {
		const article = await Article.findOne({
			where:{ id:aid, UserId:uid },
			attributes: ['id', 'title', 'content', 'createdAt']
		});
		console.log(article)
		if (article) return true;
		return false;
	},
	
	async addArticle(article) {
		try {
		  return await Article.create({ // Article.findOrCreate
		  		title: article.title,
		  		content: article.content,
		  		published: article.published,
		  		UserId: article.user.id,
		  		createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
		  });
		} catch (error) {
			article.error = ""
			if (typeof error.errors == "object"){
				article.error = error.errors[0].message
			}else article.error = error.message;
			return article;
		}
	},

	async updateArticle(article) {
		try {
			if (!(await this.isUserArticle(article.id, article.user.id)))
				// avoid IDOR (Insecure Direct Object Reference) Attacks
				throw new Error("You are not the Owner if this Article (IDOR Detected) !");
				
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
			console.log(error);
			return {error: error.message}		
		}

	},

	async deleteArticle(id, uid) {
		try {
			if (!(await this.isUserArticle(article.id, article.user.id)))
				// avoid IDOR (Insecure Direct Object Reference) Attacks
				throw new Error("You are not the Owner if this Article (IDOR Detected) !");
				
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
