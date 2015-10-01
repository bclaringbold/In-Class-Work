var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'First Express Generator Site',
                        message: 'Our first Page'});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about') 
});

module.exports = router;