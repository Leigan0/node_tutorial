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

// find() method returns all occurences
//The first parameter of the find() method is a query object. In this example
// we use an empty query object, which selects all documents in the collection.

//No parameters in the find() method gives you the same result as SELECT *

MongoClient.connect(url, function(err,db){
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}).toArray(function(err,result){
    if (err) throw err;
    console.log(result);
    db.close();
  })
})
