var express = require('express');
var router = express.Router();

//db references
var mongoose = require('mongoose');
var Article = require('../models/article');

/* GET articles page. */
router.get('/', function(req, res, next) {
  
  // use the Article model to query the Articles collection
  Article.find(function(err, articles) {
    if  (err) {
      console.log(err);
      res.end(err);
    }
    else {
      // no error, we found a list of articles
      res.render('articles/index', {
        title: 'Articles',
        articles: articles
      });
    }
  });
});

//get the add page - show blank form
router.get ('/add', function(req, res, next) {  
      res.render('articles/add', {
                 title: 'Add a new Article' 
      });
    
  });

// POST add page - save the new article
router.post ('/add', function(req, res, next) {
  
  Article.create( {
    title: req.body.title,
    content: req.body.content
  },  function(err, Article) {
    // did we get back an error or valid Article object??
    if (err) {
      console.log(err);
      res.end(err);
    }
    else {
      res.redirect('/articles');
    }
  });
  
});

// GET edit page - show the current article in the form
router.get ('/:id', function(req, res, next) {
  
  var id = req.params.id;
  
  Article.findById(id, function(err, Article){
    if(err) {
      console.log(err);
      res.end(err);
    }  
    else{
      //show the edit view
      res.render('articles/edit', {
        title: 'Article Details',
        article: Article
      });
      
    }
  });
});

// POST edit page - update the selected article
router.post ('/:id', function(req, res, next) {
  
  //grab the id from the url parameter
  var id = req.params.id;
  
  // create and populate an article object
  var article = new Article( {
    _id: id,
    title: req.body.title,
    content: req.body.content
  });
  
  Article.update( { _id: id}, article, function(err) {
    
    if (err) {
      console.log(err);
      res.end(err);
    }
    else {
      res.redirect('/articles');
    }
  });
  
});

router.get ('/delete/:id', function(req, res, next) {
  
  //grab the id from the url parameter
  var id = req.params.id;
  
  //find and delete the record
  Article.remove( { _id: id }, function(err) {
    
    if(err) {
      console.log(err);
      res.end(err);
    }  
    else{
      res.redirect('/articles');
    }
  });
});

// make this public
module.exports = router;