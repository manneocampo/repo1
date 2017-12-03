var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");

var app = express();

var port = process.env.PORT || 3000; 

var connection = mysql.createConnection({
	host:"localhost",
	user: "root",
	password:"H8passwords1!",
	database: "seinfeld_db"
});

//initiate mysql connection 
connection.connect(function(err){
	if (err){
		console.error("error connecting:" + err.stack);
		return;
	}
	console.log("connected as id" + connection.threadId);

});

app.get("/", function(req, res){

	connection.query("SELECT * FROM actors", function(err, result){

		var html = "<h1>Seinfeld Actors Ordered by ID</h1>"

		html+="<ul>";

		for (var i=0; i <result.length; i++){
			html += "<li><p> ID:" + result[i].id + "</p>";
			html += "<p>Actor:" + result[i].name + "</p>";
			html += "<p>Coolness Points:" + result[i].coolness_points + "</p>";
			html += "<p>Attitude:" + result[i].attitude + "</p></li>";

		}

		html += "</ul>";

		res.send(html);
	});
});

app.listen(port);