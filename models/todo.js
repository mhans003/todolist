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
    },
    updateOne: function(columnValues, condition, callBack) {
        orm.updateOne("todos", columnValues, condition, function(result) {
            callBack(result); 
        }); 
    },
    deleteOne: function(condition, callBack) {
        orm.deleteOne("todos", condition, function(result) {
            callBack(result); 
        }); 
    }
}

module.exports = todo; 