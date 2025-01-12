const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
//const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const potato = document.querySelector("#todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// const loginInput = document.qeurySelector("#login-form input"); 이런식으로도 작성이 가능하다.

function onLoginSubmit(tomato) {
  tomato.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

function handleLinkClick(tomato) {
  tomato.preventDefault();
  console.log(tomato);
  //alert("clicked");
}

loginForm.addEventListener("submit", onLoginSubmit);
//link.addEventListener("click", handleLinkClick);

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  potato.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `반갑소 ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  // show the login form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}
