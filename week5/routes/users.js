var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  //create a user list
  var userList = ['Me','You', 'Them'];
  
  //res.send('respond with a resource');
  res.render('users', {userList: userList } );
});

module.exports = router;
