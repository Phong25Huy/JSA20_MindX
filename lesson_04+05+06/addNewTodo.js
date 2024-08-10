var addNewTodo = function(todoList){
    
    var todoInput = document.getElementById("todo-input")
    
    var todoValue =todoInput.value
    var todoNew = {
        id: Date.now(),
        content: todoValue,
        completed: false
    }
    todoList.push(todoNew)
    
    //Render ra list mới 
    renderTodoList(todoList)      
}