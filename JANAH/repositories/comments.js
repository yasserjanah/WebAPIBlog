
const { Comment } = require('../models');
const { Article } = require('../models');
const moment = require('moment');
const Sequelize = require('sequelize');

module.exports = {

	async getAllComments(){
		return await Comment.findAndCountAll({
			attributes: ['id', 'content', 'ArticleId']
		});
	},

	async getCommentById(id) {
		return await Comment.findOne({
			where:{ id },
			attributes: ['id', 'content', 'ArticleId']
		});
	},
	
	async getTitlesWithComments(){
		return await Comment.findAll({
			group: ['ArticleId'],
			attributes: ['id', [Sequelize.fn('COUNT', 'ArticleId'), 'count']],
			include: [
				{
					model: Article,
					attributes: ['title']			
				}
			]
		});
	},
	
	async _getArticleComments(id) {
		return await Comment.findAndCountAll({
			where:{ ArticleId:id },
			attributes: ['id', 'content', 'createdAt'],
			include: [
		        {
		          model: Article,
		          where: { published:true},
		          attributes: []
		        }
		      ]
		});
	},

	async addComment(comment) {
		try {
		  return await Comment.create({ // comment.findOrCreate
		  		content: comment.content,
		  		ArticleId: comment.ArticleId,
		  		createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
		  });
		} catch (error) {
		  	console.log(error.message)
			comment.error = error.message;
			return comment;
		}
	},

	async updateComment(comment) {
		try {
			const [ updated ] = await Comment.update({
				title: comment.title,
				content: comment.content,
				updatedAt : moment().format("YYYY-MM-DD HH:mm:ss")
				}, {where: { id: comment.id }
			});
			if (updated) {
				const updatedComment = await Comment.findOne({ where: comment.id });
				return updatedComment;
			}
			return {error: `Comment with id=${comment.id} doesn't exists.`}		
		} catch(error) {
			console.log(error.message);
			return {error: error.message}		
		}

	},

	async deleteComment(id) {
		try {
			const deleted = await Comment.destroy({ where: { id	} });
			if (deleted) {
				return {message:"Comment deleted!"}
			}
			return {error: `Comment with id=${id} doesn't exists.`}		
		} catch(error) {
			console.log(error.message);
			return {error: error.message}		
		}
	},
}
