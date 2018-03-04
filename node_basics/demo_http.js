var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-type': 'text/html'}) // status code & object containing the response headers
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080


// http is a built in module for module for node - allows node to transfer data of HTTP
// http can create a http server ports and give response back to the client
// createServer() is a method to create the server

// the function passed to http.createServer methof will be executed when someone tries to access computer on that port

// If the response from HTTP server is supposed to be displayed as HTML, should include a HTTP header with the correct content type
