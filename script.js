const button = document.getElementById("hello-btn");
const message = document.getElementById("message");
const dayInput = document.getElementById("day-input");
const titleInput = document.getElementById("title-input");
const addButton = document.getElementById("add-btn");
const container = document.querySelector(".container");

const logs = [
  {day:"Day1", title:"環境変数"},
  {day:"Day2", title:"HTML基礎"},
  {day:"Day3", title:"CSS基礎"},
  {day:"Day4", title:"Flexbox"},
  {day:"Day5", title:"レスポンシブ"}
];

logs.push({day:"Day6", title:"JavaScript基礎"});

logs.forEach((log) => {
  const div = document.createElement("div");
  div.className = "box";
  div.textContent = `${log.day} : ${log.title}` ;
  container.appendChild(div);
})

addButton.addEventListener ("click", () => {
  const day = dayInput.value;
  const title = titleInput.value;

  if (day === "" || title === "") {
    alert("入力してください");
    return;
  }

  logs.push({day, title});

  const div = document.createElement("div");
  div.className = "box";
  div.textContent = `${day} : ${title}`;
  container.appendChild(div);
  
  dayInput.value = "";
  titleInput.value = "";

})

button.addEventListener("click", () => {
  if (message.textContent == "") {
    message.textContent = "Hello JavaScript";
    button.textContent = "非表示する";
  } else {
    message.textContent = "";
    button.textContent = "表示する";
  }
})
