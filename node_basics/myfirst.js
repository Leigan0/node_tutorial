var http = require('http');

// create a server object
http.createServer(function (req,res){
  res.writeHead(200, {'Content-type': 'text/html'}); // write a response to the client
  res.end('Hello World') // end the response
}).listen(8080); // port server listens on
