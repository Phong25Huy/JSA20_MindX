var todoList = [];

console.log(todoList);

var todoForm = document = document.getElementById("todo-form")

var handleSumbitForm = function (event) {
    event.preventDefault()  

    var todoInput = document.getElementById("todo-input")
    var todoValue =todoInput.value

    var todoNew = {
        id: Date.now(),
        content: todoValue,
        completed: false,
    }
    todoList.push(todoNew)

    var todoListElement = document.getElementById("todo-list")
    var todoItemElement = `
        <li class="d-flex justify-content-between list-group-item">
            <span class="task-text">${todoValue}</span>
            <input
                type="text"
                class="form-control edit-input"
                style="display: none"
                value="Lear HTML"
            />
            <div class="btn-group">
                <button class="btn btn-danger btn-sm delete-btn">✕</button>
                <button class="btn btn-primary btn-sm edit-btn">✎</button>
            </div>
        </li>                        
    `
    todoListElement.insertAdjacentHTML("afterbegin",todoItemElement)
}
todoForm.addEventListener("submit", handleSumbitForm);
