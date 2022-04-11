var formEl = document.querySelector("#task-form")
console.log(buttonEl);

var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");

    event.preventDefault();
    listItemEl.className = "task-item";
    listItemEl.textContent = "THIS IS A NEW TASK";
    tasksToDoEl.appendChild(listItemEl);
}
formEl.addEventListener("submit", createTaskHandler)






/*(console.log(window.document); // displays html elements
console.dir(window.document); // displays html as DOM  elements
window.document.querySelector("button");
var btn = window.document.querySelector("button");
console.dir(btn)
document.querySelector("button").textContent;
document.querySelector("#save-task");*/