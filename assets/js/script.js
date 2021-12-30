var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
  event.preventDefault();

  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type'").value;

  //create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  //create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" +
    taskNameInput +
    "</h3><span class='task-type'>" +
    taskTypeInput +
    "</span>";

  //attach the div created to the list item
  listItemEl.appendChild(taskInfoEl);

  //attach the list item to the unordered list
  tasksToDoEl.appendChild(listItemEl);
  console.dir(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);

