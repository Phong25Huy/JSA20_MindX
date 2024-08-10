var renderTodoList = function(todoList){
    var todoListElement = document.getElementById("todo-list")
    
        var htmlStr = "";
    
        for (var index in todoList) {
            htmlStr += 
            `
            <li class="d-flex justify-content-between list list-group-item">
                <span>${todoList[index].content}</span>
                <div class="btn-group">
                    <button class="btn btn-danger btn-sm delete-btn" onclick="deleteTodo()">✕</button>
                    <button class="btn btn-primary btn-sm edit-btn">✎</button>
                </div>
            </li>
        `;
        }
        todoListElement.innerHTML= htmlStr
}
