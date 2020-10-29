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
    updateOne: function(table, columnValue, condition, callBack) {
        const queryString = `UPDATE ${table} SET ${columnValue} WHERE ${condition}`; 
        console.log(queryString); 

        connection.query(queryString, function(error, result) {
            if(error) throw error; 

            callBack(result); 
        }); 
    },
    deleteOne: function(table, condition, callBack) {
        const queryString = `DELETE FROM ${table} WHERE ${condition}`; 

        connection.query(queryString, function(error, result) {
            if(error) throw error; 

            callBack(result); 
        }); 
    }
}

module.exports = orm; 