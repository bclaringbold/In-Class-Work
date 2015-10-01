//Start the HTTP library
var http = require('http');

var url = require('url');

//create and load HTTP server with NODE
http.createServer(function(req, res) {
   
    //get the query string value and parse the subtotal as a float value
    var qs = url.parse(req.url, true).query;
    var subTotal = parseFloat(qs.subtotal);
    
    //calculate Tax
    var tax = subTotal * 0.13;
    //calculate Total
    var total = subTotal + tax;
    
    //send an ok response to the browser header
    //res.writeHead(200, { 'Content-Type': 'test-plain'})
    
    //Output the value to the screen
    res.write('<h1>Tax Calculator</h1>Sub Total: ' + subTotal + '<br />Tax: ' + tax + '<br />Total: ' + total);
        
    //end the response
    res.end();
    
      
}).listen(3000);

//the site will load at http://localhost:3000/tax-calculator.js?subtotal=X
console.log('The site is now running at http://localhost:3000')