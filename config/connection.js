//Set up and connect to MySQL. 
const mysql = require("mysql");

//Define connection. 
//const connection = mysql.createConnection({
  const connection = mysql.createPool({
  //host: "localhost",
  host: process.env.DB_HOST,
  //port: 3306,
  //user: "root",
  user: process.env.DB_USER,
  //password: "",
  password: process.env.DB_PASSWORD,
  //database: "todolist_db"
  database: process.env.DB_DATABASE
});

//Establish connection. 
/*
connection.connect(function(err) {
  if (err) {
    console.error(`Error Connecting: ${err.stack}`);
    return;
  }

  console.log(`Connected as id ${connection.threadId}`);
});
*/

// Export the connection. 
module.exports = connection;
