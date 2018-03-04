var http = require('http');
var url = require('url')

http.createServer(function (req,res){
  res.writeHead(200, {'Content-type': 'text-html'});
  var q = url.parse(req.url, true).query; // req.url gets the url part after '/'
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);

// there are some built in modules to easily split the query string into readable parts

// http://localhost:8080/?year=2018&month=March => 2018 March


// Splits web address into readable parts
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2018&month=March'
var q = url.parse(adr,true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2018&month=March'

var qdata = q.query; //returns an object: { year: 2018, month: 'March' }
console.log(qdata.month); //returns 'March'
