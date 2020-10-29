$(function() {
    $(".create-todo").on("submit", function(event) {
        event.preventDefault(); 

        const newToDo = {
            todo_item: $("#todo-text").val().trim()
        }; 

        $.ajax("/api/todos", {
            type: "POST",
            data: newToDo
        }).then(
            function() {
                console.log("Inserted New Todo"); 
                location.reload(); 
            }
        ); 
    }); 
})