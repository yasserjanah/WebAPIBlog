var express = require('express');
var router = express.Router();

const articleRepo = require('../repositories/articles');

router.get('/', async function(req, res, next) {
  	res.status(200).send(await articleRepo.getAllArticles());
});

router.get('/:id', async function(req, res, next) {
	res.status(200).send(await articleRepo.getArticle(req.params.id));
});

router.get('/:id/comments', async function(req, res, next) {
	res.status(200).send(await articleRepo.getArticleComments(req.params.id));
});

router.post('/', async function(req, res, next) {
  	let article = {};
  	article.title = req.body.title;
  	article.content = req.body.content;
  	article.published = req.body.published;
	res.status(201).send(await articleRepo.addArticle(article));

});

router.put('/', async function(req, res, next) {
  	var article = {};
  	article.id = req.body.id;
  	article.title = req.body.title;
  	article.content = req.body.content;
  	article.published = req.body.published;
  	res.status(200).send(await articleRepo.updateArticle(article));
});

router.delete('/:id', async function(req, res, next) {
  	res.status(200).send(await articleRepo.deleteArticle(req.params.id));
});

module.exports = router;
