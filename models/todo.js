const orm = require("../config/orm"); 

const todo = {
    selectAll: function(callBack) {
        orm.selectAll("todos", function(result) {
            callBack(result); 
        }); 
    },
    insertOne: function(columns, values, callBack) {
        orm.insertOne("todos", columns, values, function(result) {
            callBack(result); 
        }); 
    }
}

module.exports = todo; 