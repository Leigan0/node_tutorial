var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// The first parameter of the deleteOne() method is a query object defining which document to delete.
// Note: If the query finds more than one document, only the first occurrence is deleted.

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: 'Mountain 21' };
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});

// The first parameter of the deleteMany() method is a query object defining which documents to delete.
// delete all documents with address starting with o

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: /^O/ };
  dbo.collection("customers").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});

// The deleteMany() method returns an object which contains information about
// how the execution affected the database.
