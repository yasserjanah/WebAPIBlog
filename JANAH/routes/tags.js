var express = require('express');
var router = express.Router();

const tagRepo = require('../repositories/tags');
const { authCheck } = require('../auth/auth');

router.get('/', async function(req, res, next) {
  	res.status(200).send(await tagRepo.getAllTags());
});

router.get('/:id', async function(req, res, next) {
	res.status(200).send(await tagRepo.getTagById(req.params.id));
});

router.post('/', authCheck, async function(req, res, next) {
  	let tag = {};
  	tag.name = req.body.name;
	res.status(201).send(await tagRepo.addTag(tag));

});

router.put('/', authCheck, async function(req, res, next) {
  	var tag = {};
  	tag.id = req.body.id;
  	tag.name = req.body.name;
  	res.status(200).send(await tagRepo.updateTag(tag));
});

router.delete('/:id', authCheck, async function(req, res, next) {
  	res.status(200).send(await tagRepo.deleteTag(req.params.id));
});

module.exports = router;
