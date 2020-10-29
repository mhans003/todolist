const orm = require("../config/orm"); 

const todo = {
    selectAll: function(callBack) {
        orm.selectAll("todos", function(result) {
            callBack(result); 
        }); 
    }
}

module.exports = todo; 