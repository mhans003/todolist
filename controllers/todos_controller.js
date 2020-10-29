const express = require("express"); 
const todo = require("../models/todo.js"); 

const router = express.Router(); 

router.get("/", function(request, response) {
    todo.selectAll(function(data) {
        const handlebarsObject = {
            todos: data
        }; 
        console.log(handlebarsObject); 
        response.render("index", handlebarsObject); 
    }); 
}); 

module.exports = router; 