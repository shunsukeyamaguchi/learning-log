const button = document.getElementById("hello-btn");
const message = document.getElementById("message");
const dayInput = document.getElementById("day-input");
const titleInput = document.getElementById("title-input");
const addButton = document.getElementById("add-btn");
const container = document.querySelector(".container");
const savedLogs = localStorage.getItem("logs");
let editingIndex = null;


const logs = savedLogs
  ? JSON.parse(savedLogs)
  : [
      {day:"Day1", title:"環境変数"},
      {day:"Day2", title:"HTML基礎"},
      {day:"Day3", title:"CSS基礎"},
      {day:"Day4", title:"Flexbox"},
      {day:"Day5", title:"レスポンシブ"}
    ];

addButton.addEventListener ("click", () => {
  const day = dayInput.value;
  const title = titleInput.value;

  if (day === "" || title === "") {
    alert("入力してください");
    return;
  }

  if (editingIndex === null) {
    logs.push({day,title});
  } else {
    logs[editingIndex] = {day,title};
    editingIndex = null;
    addButton.textContent = "追加";
  }
  
  saveLogs();
  renderLogs();
  
  dayInput.value = "";
  titleInput.value = "";
})

function renderLogs () {
  container.innerHTML = "";

  logs.forEach((log, index) => {
    const div = document.createElement("div");
    div.className = "box";
    div.textContent = `${log.day} : ${log.title}`;

    const editBtn = document.createElement("button");
    editBtn.textContent = "編集";

    editBtn.addEventListener("click", () => {
      addButton.textContent = "更新";
      dayInput.value = log.day;
      titleInput.value = log.title;
      editingIndex = index;
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent  = "削除";

    deleteBtn.addEventListener("click" ,() => {
      logs.splice(index, 1);
      saveLogs();
      renderLogs();
    })

    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
    container.appendChild(div);
  })
}

function saveLogs() {
  localStorage.setItem("logs", JSON.stringify(logs));
}

renderLogs();

button.addEventListener("click", () => {
  if (message.textContent == "") {
    message.textContent = "Hello JavaScript";
    button.textContent = "非表示する";
  } else {
    message.textContent = "";
    button.textContent = "表示する";
  }
})
