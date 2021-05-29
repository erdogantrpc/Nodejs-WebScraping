const fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";



// Veriyi Collection'a yaz
// MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("pieces", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     //db.close();
//   });
//   var contents  = fs.readFileSync("ParcaDetaylari.json");
//     var myobj = JSON.parse(contents);
//   dbo.collection("pieces").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });

// Verileri Oku
MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("pieces").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result[0]);
    db.close();
  });
});
