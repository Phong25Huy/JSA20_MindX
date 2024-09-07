

var website = function(){
    var todoList = [
    ];

    renderTodoList(todoList)
     //Render ra list mới 
    
    var todoForm = document.getElementById("todo-form")
    
    todoForm.addEventListener("submit", function(e){
        e.preventDefault();
        addNewTodo(todoList);
        console.log(todoList)
    });
}
website()