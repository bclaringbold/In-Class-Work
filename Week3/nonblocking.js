//non-blocking

//link to the fs core module to read text files
var fs = require('fs');

function fruitCallback(err, fruit) {
    console.log(fruit);
}


//read and output the fruit
//var fruit = fs.readFile('fruit.txt', 'utf8', function(err, fruit){
var fruit = fs.readFile('fruit.txt', 'utf8', fruitCallback);
    

    //output the fruit list
    //console.log(fruit);

//});


console.log('Printing Fruit');

//read and output the vegetables
var vegetables = fs.readFile('vegetables.txt', 'utf8', function(err, vegetables){
    //output the vegetables list
    console.log(vegetables);

});

console.log('Printing Vegetables');