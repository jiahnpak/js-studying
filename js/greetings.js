const Inputform = document.querySelector("#login-form");
const inputButton = document.querySelector("#login-form input");
const greetings = document.querySelector("#greeting");

function inputButtonFunction(event) {
  event.preventDefault();
  Inputform.classList.add("hidden");
  const username = inputButton.value;
  localStorage.setItem("username", username);
  greetings.innerText = `Hello ${username}`;
  greetings.classList.remove("hidden");
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  Inputform.classList.remove("hidden");
  Inputform.addEventListener("submit", inputButtonFunction);
} else {
  greetings.innerText = `Hello ${savedUsername}`;
  greetings.classList.remove("hidden");
}
