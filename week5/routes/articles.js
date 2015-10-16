var express = require('express');
var router = express.Router();

/* GET articles page. */
router.get('/', function(req, res, next) {
  res.render('articles/index', { title: 'Articles',
                        message: 'Our articles page'});
});

module.exports = router;
