var express = require('express');
var router = express.Router();

const articleRepo = require('../repositories/articles');
const { authCheck } = require('../auth/auth');

router.get('/', async function(req, res, next) {
	let response = await (req.query.offset && req.query.limit) ? articleRepo.getArticles(req.query.offset, req.query.limit) : articleRepo.getAllArticles()
	//console.log((await response).rows.length)
  	res.status(200).send(await response);
});

router.get('/:id', async function(req, res, next) {
	res.status(200).send(await articleRepo.getArticle(req.params.id));
});

router.get('/:id/comments', async function(req, res, next) {
	res.status(200).send(await articleRepo.getArticleComments(req.params.id));
});

router.post('/', authCheck, async function(req, res, next) {
  	let article = {};
  	article.user = req.user;
  	article.title = req.body.title;
  	article.content = req.body.content;
  	article.published = req.body.published;
  	//console.log(article)
	res.status(201).send(await articleRepo.addArticle(article));

});

router.put('/', authCheck, async function(req, res, next) {
  	var article = {};
  	article.user = req.user;
  	article.id = parseInt(req.body.id);
  	article.title = req.body.title;
  	article.content = req.body.content;
  	article.published = req.body.published;
  	res.status(200).send(await articleRepo.updateArticle(article));
});

router.delete('/:id', authCheck, async function(req, res, next) {
  	res.status(200).send(await articleRepo.deleteArticle(parseInt(req.params.id), req.user.id));
});

module.exports = router;
