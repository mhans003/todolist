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

router.put("/api/todos/:id", function(request, response) {
    const condition = `id = ${request.params.id}`; 

    console.log("condition",condition); 

    todo.updateOne(`done = ${request.body.done}`, condition, function(result) {
        if(result.changedRows === 0) return response.status(404).end(); 
        response.status(200).end(); 
    });
}); 

router.delete("/api/todos/:id", function(request, response) {
    //const id = request.params.id; 
    const condition = `id = ${request.params.id}`; 

    todo.deleteOne(condition, function(result) {
        if(result.changedRows === 0) return response.end(); 
        response.status(200).end(); 
    }); 
}); 

module.exports = router; 