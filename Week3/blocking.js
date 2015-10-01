//blocking

//link to the fs core module to read text files
var fs = require('fs');

//read the fruit
var fruit = fs.readFileSync('fruit.txt', 'utf8');

//output the fruit list and a message
console.log(fruit);
console.log('Printing Fruit');

//read the vegetables
var vegetables = fs.readFileSync('vegetables.txt', 'utf8');

//output the vegetables list and a message
console.log(vegetables);
console.log('Printing Vegetables');