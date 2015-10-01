//Hello World in the browser
var http = require('http');

//create and load HTTP server with NODE
http.createServer(function(req, res) {
   
    //send an ok response to the browser header
    res.writeHead(200, { 'Content-Type': 'test-plain'})
    
    //display some text on the page
    res.write('Hello Word, running on port 3000');
    
    //log to the console
    console.log('Hello World');
    
    //end the response
    res.end();
    //res.end('Ending Response');
    
      
}).listen(3000);

//the site will load at http://localhost:3000
console.log('The site is now running at http://localhost:3000')