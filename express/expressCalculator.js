var express = require("express");

var app = express();

var PORT = process.env.PORT || 3002; 


app.get("/:operator/:num1/:num2", function(req, res) {

console.log(req.params);

var operator = req.params.operator;
var num1 = +req.params.num1;
var num2 = +req.params.num2;

if(isNaN(num1) ||  isNaN(num2)){
	return res.send("error, one or more of the numbers is not a number")
}

  // TODO parse out the variables from the 
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  
  // Parameters are converted to integers

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      results = num1 - num2; 
       break;
    case "multiply":
      // Multiply
      break;
    case "divide":
      // Divide
      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Initiate the listener.
app.listen(3002);
