const dotenv = require("dotenv");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: "root",
    password: "root",
    database: "internal",
    port: 8000
  });

module.exports = {
  dbConnect: function() {

    connection.connect(function(err) {
      if (err) {
        console.error("Error connecting: " + err.stack);
        return;
      }
      console.log("Connected as id " + connection.threadId);
    });
  },

  dbCreateTable: function() {
    var sql =
      "CREATE TABLE employes (full_name VARCHAR(100) NOT NULL PRIMARY KEY, department VARCHAR(50), phoneNumber VARCHAR(10), boss VARCHAR(50), position VARCHAR(50), personalEmail VARCHAR(80), start_date VARCHAR(10))";
    connection.query(sql, function(err, result) {
      if (err) {
        console.error("Error creating table: " + err);
        return;
      }
      console.log("Table Created!");
    });
  },

  dbAddEmploye: function(
    fullName,
    department,
    phoneNumber,
    boss,
    position,
    personalEmail,
    startDate
  ) {
    var sql =
      `INSERT INTO employes (full_name, department, phoneNumber, boss, position, personalEmail, start_date) VALUES ('${fullName}', '${department}', '${phoneNumber}', '${boss}', '${position}', '${personalEmail}', '${startDate}')`;

    connection.query(sql, function(err, result) {
      if (err) {
        console.error("Error inserting row: " + err);
        return;
      }
      console.log("1 row inserted!");
    });
  },

  dbFetchEmployes: function() {
    var sql = 
    `SELECT * FROM employes`;
    connection.query(sql, function(err, result){
      if(err) {
        console.error("Error fetching employes: " + err);
        return;
      }
      console.log("Successfully fetched employes.");
      return result;
    })
  }
};
