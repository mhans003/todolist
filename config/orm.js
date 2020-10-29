//Import MySQL connection. 
const connection = require("./connection"); 

//selectAll()
//insertOne()
//updateOne()

//SQL Functions.
const orm = {
    selectAll: function(table, callBack) {
        const queryString = `SELECT * FROM ${table}`; 
        connection.query(queryString, function(error, result) {
            if(error) throw error; 

            callBack(result); 
        })
    },
    insertOne: function(table, columns, values, callBack) {
        const queryString = `INSERT INTO ${table} SET ?`; 
        connection.query(queryString, {
            todo_item: values
        }, 
        function(error, result) {
            if(error) throw error; 

            callBack(result); 
        }); 
    },
    updateOne: function() {

    }
}

module.exports = orm; 