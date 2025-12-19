const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("list");

addBtn.addEventListener("click", addTask);//listens for click

function addTask() {
  const taskText = inputBox.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  //  Create checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";

  //  Create span for text
  const spanText = document.createElement("span");
  spanText.innerText = taskText;
  spanText.className = "task-text";

  //  Create delete button
  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "❌";
  deleteBtn.className = "delete-btn";

  // Append elements to li
  li.appendChild(checkbox);
  li.appendChild(spanText);
  li.appendChild(deleteBtn);

  list.appendChild(li);
  inputBox.value = "";

  saveData();
}


//Handle Click (Complete or Delete)
list.addEventListener("click", function (e) {
  // Toggle completed when checkbox is clicked
  if (e.target.classList.contains("task-checkbox")) {
    const li = e.target.parentElement;
    li.classList.toggle("completed");
    saveData();
  }
  // Delete task
  else if (e.target.className === "delete-btn") {
    e.target.parentElement.remove();
    saveData();
  }
});


//Save Data to localStorage
function saveData() {
  localStorage.setItem("tasks", list.innerHTML);
}

//Load Data on Page Load
function showData() {
  list.innerHTML = localStorage.getItem("tasks");
}

showData();
