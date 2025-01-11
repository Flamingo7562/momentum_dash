const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let potatoes = [];
const POTATOES_KEY = "potatoes";

function savePotatoes() {
  localStorage.setItem(POTATOES_KEY, JSON.stringify(potatoes));
}

function deleteToDO(tomato) {
  const potato = tomato.target.parentElement;
  potato.remove();
}

function paintToDO(newTodo) {
  const potato = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");

  btn.innerText = "❌";
  btn.addEventListener("click", deleteToDO);

  potato.id = newTodo.id;
  potato.appendChild(span);
  potato.appendChild(btn);
  span.innerText = newTodo.text;
  toDoList.appendChild(potato);
}

function handleToDoSubmit(tomato) {
  tomato.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };

  potatoes.push(newTodoObj);
  paintToDO(newTodoObj);
  savePotatoes();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedPotatoes = localStorage.getItem(POTATOES_KEY);

if (savedPotatoes != null) {
  const parsedPotatoes = JSON.parse(savedPotatoes);
  potatoes = parsedPotatoes;
  parsedPotatoes.forEach((potato) => paintToDO(potato));
}
