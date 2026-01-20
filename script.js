const button = document.getElementById("hello-btn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "Hello JavaScript!";
});
