var formidable = require('formidable')
// create a webpage that lets user upload files

// this code will produce an html form

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload'){
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files){
      var oldpath = files.filetoupload.path;
      var newpath = '/Users/leigh-anngant/Projects/makers_onsite/week_9/node_tutorial/files/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err){
        if (err) throw err;
        res.write('File uploaded and moved');
        res.end()
      });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
