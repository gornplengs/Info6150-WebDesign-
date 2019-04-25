// Include http module, 
console.log("test");
var http = require("http"), 
// And url module, which is very helpful in parsing request parameters. 
	url = require("url"); 

// Create the server. 
http.createServer(function (request, response) { 

	console.log(request.url)
	// Attach listener on end event. 

		// Parse the request for arguments and store them in _get variable. 
		// This function parses the url from request and returns object representation. 
		//var _get = url.parse(request.url, true).query; 
		// Write headers to the response. 
		var _get = url.parse(request.url, true).query;
		response.statusCode = 200;
		response.setHeader('Content-Type','text/plain'); 
		response.end('Here is your data: ' + _get['testdata']);
		// Send data and end response. 
	console.log('Here is your data: ' + _get['testdata']);  
}).listen(8000);