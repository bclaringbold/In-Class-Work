var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'First Express Generator Site using MongoDB',
                        message: 'Our first Page'});
});

module.exports = router;
