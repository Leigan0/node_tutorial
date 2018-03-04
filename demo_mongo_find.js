// //find and fineOne - find data in collection - same as select SQL
//
// //fineOne finds the first occurence in the selection
// //
// // The first parameter of the findOne() method is a query object. In this example we use an empty query object,
// // which selects all documents in a collection (but returns only the first document).
//
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
//
MongoClient.connect(url, function(err,db){
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").findOne({}, function(err,result){
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});

//
// // find() method returns all occurences
// //The first parameter of the find() method is a query object. In this example
// // we use an empty query object, which selects all documents in the collection.
//
// //No parameters in the find() method gives you the same result as SELECT *
//
MongoClient.connect(url, function(err,db){
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}).toArray(function(err,result){
    if (err) throw err;
    console.log(result);
    db.close();
  })
})

// The second parameter of the find() method is an object describing which fields to include in the result.
// This parameter is optional, and if omitted, all fields will be included in the result.

MongoClient.connect(url, function(err,db){
  if (err) throw err;
  var dbo = db.db('mydb');
  dbo.collection("customers").find({}, { _id: 0, name: 1, address: 1}).toArray(function(err,result){
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
// returns name and address no id

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, { address: 0 }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

// exclude address from return

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, { _id: 0, name: 1 }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
})

// return name only 
