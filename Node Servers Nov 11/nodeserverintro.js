var http = require("http");

var PORT = 8080;

function handleRequest(request, response) {
	response.end("<h1>It works!</h1> <p>Path hit:" + request.url + "</p>");
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server is on");
});

