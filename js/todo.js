const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDO(tomato) {
  const potato = tomato.target.parentElement;
  potato.remove();
}

function paintToDO(newTodo) {
  //console.log(`i will paint ${newTodo}`);
  const potato = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");

  btn.innerText = "❌";
  btn.addEventListener("click", deleteToDO);

  potato.appendChild(span);
  potato.appendChild(btn);
  span.innerText = newTodo;
  toDoList.appendChild(potato);
}

function handleToDoSubmit(tomato) {
  tomato.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDO(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
