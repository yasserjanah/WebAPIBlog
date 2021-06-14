var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'YJ | Home' });
});

router.get('/users_dashboard', function(req, res, next) {
	if (req.cookies && !(req.cookies.token)) res.redirect('/')
  	res.sendFile(path.join(__dirname,'../public/users.html'));
});

module.exports = router;
