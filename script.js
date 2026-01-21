const button = document.getElementById("hello-btn");
const message = document.getElementById("message");

// let isShown = false;

button.addEventListener("click", () => {
  // if (isShown) {
  //   message.textContent = "";
  //   button.textContent = "表示する";
  // } else {
  //   message.textContent = "Hello JavaScript!";
  //   button.textContent = "非表示にする";
  // }

  if (message.textContent == "") {
    message.textContent = "Hell JavaScript";
    button.textContent = "非表示にする";
  } else {
    message.textContent = "";
    button.textContent = "表示する";
  }


  // isShown = !isShown
});