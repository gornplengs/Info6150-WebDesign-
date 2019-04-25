
var http = require("http"),

	fs = require("fs");

var m = 0;
http.createServer(function (request, response) {


		fs.readFile("test.txt", 'utf-8', function (error, data) {
			
			console.log(data);
			response.statusCode = 200;
			response.setHeader('Content-Type','text/plain'); 
			response.end(data);
		});

}).listen(8000);
// setTimeout(function() {
// 	console.log("before");
//   }, 0);
  
//   process.nextTick(function() {
// 	console.log("middle");
//   });
  
//   console.log("after");