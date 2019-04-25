 var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("final");
  var myobj = [
    { searchID: 'sim', gameName: 'The Sims 4', description: ''},
    { name: 'Peter', theme: 'Lowstreet 4'},
    { name: 'Amy', theme: 'Apple st 652'},
    { name: 'Hannah', theme: 'Mountain 21'},
    { name: 'Michael', theme: 'Valley 345'},
    { name: 'Sandy', theme: 'Ocean blvd 2'},
    { name: 'Betty', theme: 'Green Grass 1'},
    { name: 'Richard', theme: 'Sky st 331'},
    { name: 'Susan', theme: 'One way 98'},
    { name: 'Vicky', theme: 'Yellow Garden 2'},
    { name: 'Ben', theme: 'Park Lane 38'},
    { name: 'William', theme: 'Central st 954'},
    { name: 'Chuck', theme: 'Main Road 989'},
    { name: 'Viola', theme: 'Sideway 1633'}
  ];
  dbo.collection("books").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});