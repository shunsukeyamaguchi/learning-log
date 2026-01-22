const logs = [
  "Day1 : 環境変数",
  "Day2 : HTML基礎",
  "Day3 : CSS基礎",
  "Day4 : Flexbox",
  "Day5 : レスポンシブ",
];

const container = document.querySelector(".container");

logs.push("Day6 : JavaScript基礎");

logs.forEach((log) => {
  const div = document.createElement("div");
  div.className = "box";
  div.textContent = log;
  container.appendChild(div);
})
