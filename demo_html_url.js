var http = require('http');

http.createServer(function (req,res){
  res.writeHead(200, {'Content-type': 'text-html'});
  res.write(req.url); // gets the url part after '/'
  res.end();
}).listen(8080);

// there are some built in modules to easily split the query string into readable parts
