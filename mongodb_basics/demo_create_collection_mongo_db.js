//collection in mongo same as table in sql

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db){
  if (err) throw err;
  var dbo = db.db('mydb');
  dbo.createCollection("customers", function(err,res){
    if (err) throw err
    console.log("Collection Created");
    db.close()
  });
});
