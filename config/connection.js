//Set up and connect to MySQL. 
const mysql = require("mysql");

//Define connection. 
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "todolist_db"
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
