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

router.post("/api/todos", function(request, response) {
    todo.insertOne([
        "todo_item"
    ], [
        request.body.todo_item
    ], function(result) {
        response.json({id: result.insertId}); 
    })
}); 

module.exports = router; 