const button = document.getElementById("hello-btn");
const message = document.getElementById("message");
const dayInput = document.getElementById("day-input");
const titleInput = document.getElementById("title-input");
const addButton = document.getElementById("add-btn");
const container = document.querySelector(".container");
const savedLogs = localStorage.getItem("logs");
let editingIndex = null;
let filter = "all";


const logs = savedLogs
  ? JSON.parse(savedLogs)
  : [
      { day: "Day1", title: "環境変数", completed: false }
    ];

document.getElementById("filter-all").addEventListener("click", () => {
  filter = "all";
  renderLogs();
});

document.getElementById("filter-active").addEventListener("click", () => {
  filter = "active";
  renderLogs();
});

document.getElementById("filter-completed").addEventListener("click", () => {
  filter = "completed";
  renderLogs();
});

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

  let displayLogs = logs;

  if (filter === "active") {
    displayLogs = logs.filter(log => !log.completed);
  } else if (filter === "completed") {
    displayLogs = logs.filter(log => log.completed);
  }


  container.innerHTML = "";

  displayLogs.forEach((log, index) => {
    const targetIndex = logs.indexOf(log);

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
      logs.splice(targetIndex, 1);
      saveLogs();
      renderLogs();
    })

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = log.completed;

    checkbox.addEventListener("change", ()=> {
      log.completed = checkbox.checked;
      saveLogs();
      renderLogs();
    })

    if (log.completed) {
      div.style.textDecoration = "line-through";
      div.style.opacity = "0.6";
    };

    div.appendChild(checkbox);
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
