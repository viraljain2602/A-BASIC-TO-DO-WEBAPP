let taskList = document.getElementById("task-list");
let newTaskInput = document.getElementById("new-task");

function addTask() {
  let taskName = newTaskInput.value.trim();
  if (taskName !== "") {
    let taskItem = document.createElement("li");
    let taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.addEventListener("click", toggleTask);
    let taskSpan = document.createElement("span");
    taskSpan.innerText = taskName;
    let taskDelete = document.createElement("button");
    taskDelete.innerText = "Delete";
    taskDelete.addEventListener("click", deleteTask);
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(taskDelete);
    taskList.appendChild(taskItem);
    newTaskInput.value = "";
  }
}

function toggleTask(event) {
  let checkbox = event.target;
  let taskSpan = checkbox.nextSibling;
  if (checkbox.checked) {
    taskSpan.style.textDecoration = "line-through";
  } else {
    taskSpan.style.textDecoration = "none";
  }
}

function deleteTask(event) {
  let deleteButton = event.target;
  let taskItem = deleteButton.parentNode;
  taskList.removeChild(taskItem);
}
