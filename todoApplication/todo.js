let todoItemsContainer = document.getElementById("todoItemsContainer");

let todoList = [
    {
        text: "Learn HTML"
    },
    {
        text: "Learn CSS"
    },
    {
        text: "Learn JavaScript"
    }
    
    ];


function todoAndAppend(todo){
    let todoListContainer = document.createElement("li");
todoListContainer.classList.add("todo-item-container", "d-flex", "flex-row");
todoItemsContainer.appendChild(todoListContainer);

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "checkBox";
inputElement.classList.add("checkbox-input");
todoListContainer.appendChild(inputElement);

let labelContainer = document.createElement("div");
labelContainer.classList.add("label-container","d-flex","flex-row");
todoListContainer.appendChild(labelContainer);

let labelElement = document.createElement("label");
labelElement.setAttribute("for","checkBox");
labelElement.textContent = todo.text;
labelElement.classList.add("checkbox-label");
labelContainer.appendChild(labelElement);

let deleteIconContainer = document.createElement("div");
deleteIconContainer.classList.add("delete-icon-container");
labelContainer.appendChild(deleteIconContainer);

let deleteElement = document.createElement("button");
deleteElement.classList.add("btn","btn-primary");
deleteElement.textContent = "Delete";
deleteIconContainer.appendChild(deleteElement);
}

for (let todo of todoList){
    todoAndAppend(todo);
}





