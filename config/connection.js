//Set up and connect to MySQL. 
const mysql = require("mysql");

//Define connection. 
const connection = mysql.createConnection({
  //host: "localhost",
  //host: "us-cdbr-east-02.cleardb.com",
  host: process.env.DB_HOST,
  //port: 3306,
  //user: "root",
  //user: "bc63f9baf3dc33",
  user: process.env.DB_USER,
  //password: "",
  //password: "b8ceb667",
  password: process.env.DB_PASSWORD,
  //database: "todolist_db"
  //database: "heroku_46a814c5751ed29"
  database: process.env.DB_DATABASE
});

//Establish connection. 
connection.connect(function(err) {
  if (err) {
    console.error(`Error Connecting: ${err.stack}`);
    return;
  }

  console.log(`Connected as id ${connection.threadId}`);
});

// Export the connection. 
module.exports = connection;
