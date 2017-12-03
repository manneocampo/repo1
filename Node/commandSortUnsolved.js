// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
var numArray = []; 
for (var i=2; i<process.argv.length; i++) {
	numArray.push(process.argv[i]);
}

numArray.sort(function(a,b) {return a-b});
for (var i=0; i<numArray.length;i++) {
	console.log(numArray[i]);
}