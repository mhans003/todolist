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

    $(".toggle-done").on("click", function(event) {
        const id = $(this).data("id"); 
        const changeDone = $(this).data("done"); 

        const doneStatus = {
            done: changeDone
        }; 

        $.ajax(`/api/todos/${id}`, {
            type: "PUT",
            data: doneStatus
        }).then(
            function() {
                console.log(`Changed done status to "${changeDone}".`); 
                location.reload(); 
            }
        ); 
    }); 
})