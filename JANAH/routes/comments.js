var express = require('express');
var router = express.Router();

const commentRepo = require('../repositories/comments');
const { authCheck } = require('../auth/auth');

router.get('/', async function(req, res, next) {
  	res.status(200).send(await commentRepo.getTitlesWithComments());
});

router.get('/:id', async function(req, res, next) {
	res.status(200).send(await commentRepo.getCommentById(req.params.id));
});


router.post('/', authCheck,	async function(req, res, next) {
  	let comment = {};
  	comment.content = req.body.content;
  	comment.ArticleId = req.body.ArticleId;
	res.status(201).send(await commentRepo.addComment(comment));

});

router.put('/', authCheck, async function(req, res, next) {
  	var comment = {};
  	comment.id = req.body.id;
  	comment.content = req.body.content;
  	// comment.ArticleId = req.body.ArticleId; // don't allow to user to change the ArticleId
  	res.status(200).send(await commentRepo.updateComment(comment));
});

router.delete('/:id', authCheck, async function(req, res, next) {
  	res.status(200).send(await commentRepo.deleteComment(req.params.id));
});

module.exports = router;
