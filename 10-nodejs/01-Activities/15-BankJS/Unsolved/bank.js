var args = process.argv; 

var num1 = parseFloat(args[3]); 

var fs = require("fs");


function total() {


	fs.readFile("bank.txt", "utf8", function(error, data) {
		if (error) {
			return console.log(error);
		}
		var balance = 0;
		console.log(data);

		var dataArr = data.split(",");

		for (var i=0; i<dataArr.length; i++) {
			balance+= parseFloat(dataArr[i]);
			
		}console.log("balance:" + balance.toFixed(2));
		
	});
}


function deposit() {
	fs. appendFile("bank.txt", "," + num1, function(error) {
		if (error) {
			return console.log(error);
		}
		console.log("deposited:" + num1 + ".");
	})

	if (!isNaN (num1)) {
		switch (args[2]) {
			case 'add':
			console.log(num1 + total);
			break;

		}
	}
}

if (args[2] === 'total') {
	total();
}