const { mongourl } = require("./config.js");
var MongoClient = require("mongodb").MongoClient;
var url = mongourl;

module.exports = {
  mongoCreateDB: function() {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      console.log("Database created!");
      db.close();
    });
  },
  mongoCreateCollection: function() {
    MongoClient.connect(url, function(err, db) {
      if (err) {
        console.error("Conuld not connect to DB: " + err);
        return;
      }
      console.log("Connected to db!");
      var dbo = db.db("internal");
      dbo.createCollection("employes", function(err, res) {
        if (err) {
          console.error("Could not create collection: " + err);
          return;
        }
        console.log("Collection created!");
      });
      var collection = dbo.collection("employes");
      collection.createIndex(
        { firstName: 1, lastName: 1 }, { unique: true },
        function(err, res) {
          if (err) {
            console.error("Error creating index: " + err);
            return;
          }
          console.log("Index successfully created. " + res);
        }
      );
      db.close();
    });
  },
  mongoInsertEmp: function(tableName, row) {
    MongoClient.connect(url, function(err, db){
      if(err) throw err;
      var dbo = db.db("internal");
      var collection = dbo.collection(tableName);
      collection.insertOne(row, function(err, rest){
        if (err){
          console.error("Error while inserting row: " + err);
        }
        console.log("1 row inserted. ");
        db.close();
      });
    });
  }, 
  mongoFetchTable: function(tableName, callback) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("internal");
      var collection = dbo.collection(tableName);

      collection.find({}).toArray(function(err, result) {
        if (err) throw err;
        //console.log(JSON.stringify(result));
        db.close(); 
        callback(result);
      });
    });
  }, 
  mongoCheckForDup: function(tableName, value1, value2, callback) {
    MongoClient.connect(url, function(err, db) {
      if(err) throw err;
      var dbo = db.db("internal");
      var collection = dbo.collection(tableName);

      collection.find({firstName: value1, lastName: value2}).toArray(function(err, result) {
        if (err) throw err;
        db.close();
        if(result.length <= 0) {
          callback(false);  
        } else {callback(true)}; // True if the user already exists.
      });
    });
  }
};
