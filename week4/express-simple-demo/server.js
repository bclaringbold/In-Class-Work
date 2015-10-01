// connect to express
var express = require('express');

//create the new express app
var app = express();

//handle a get request
app.get('/', function(req, res) {
    res.send('Hello World');

});

app.get('/login', function(req, res) {
    res.send('We will show a login form here. <form method=\"post\"><input type=\"submit\"> </form>')

});

app.post('/login', function(req, res) {
    res.send('Thank you for your submission');

});

var server = app.listen(3000, function () {
    console.log('Express app running on port 3000');
});

