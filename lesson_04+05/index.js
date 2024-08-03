var to_do_list = [];

console.log(to_do_list);

var todoForm = document = document.getElementById("todo-form")

var handleSumbitForm = function (event) {
    event.preventDefault();

    var todoInput = document.getElementById("todo-input")
    console.log(todoInput.value)
}

todoForm.addEventListener("submit", handleSumbitForm);
