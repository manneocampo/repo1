var argument = process.argv; 

//non DRY way but works 
// var add = parseFloat(argument[2]) + parseFloat(argument[3]); 
// var subtract = parseFloat(argument[4]) - parseFloat(argument[5]);
// var multiply = parseFloat(argument[6]) * parseFloat(argument[7]);
// var divide = parseFloat(argument[8]) / parseFloat(argument[9]);
// var remainder = parseFloat(argument[10]) % parseFloat(argument[11]);	

// console.log(add);
// console.log(subtract);
// console.log(multiply);
// console.log(divide);
// console.log(remainder);

//short hand for parseFloat below and DRY way to start the code using two variables 
// var num = argument[2];
// var otherNum = argument[3];

// console.log(+num + +otherNum);


/*separate activity instructions: Write a command line node application 
that takes in a number from the command line and finds the sum of all 
the multiples of 6 that are smaller than it. (ex: input: 13... output: 6 + 12 = 18)*/

var num = +argument[2];
var sumNum=0;

for (var i=0; i<num; i+=6) {
	sumNum = i + sumNum; 
}; 
console.log(sumNum);