// A document in MongoDB is the same as a record in MySQL
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err,db){
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res){
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

// Note: If you try to insert documents in a collection that do not exist,
// MongoDB will create the collection automatically.
