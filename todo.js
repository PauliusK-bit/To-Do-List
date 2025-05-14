const addButton = document.getElementById("add");

const submitButton = document.getElementById("submitBtn");
const result = document.getElementById("result");

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("inputContainers").style.display = "block";

  submitButton.style.display = "inline-block";
});

function addDeleteButton(text) {
  const p = document.createElement("p");
  p.innerText = text;
  p.className = "styled-box";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Ištrinti";
  deleteButton.style.marginLeft = "10px";

  deleteButton.className = "deleteButton";

  deleteButton.addEventListener("click", () => {
    p.remove();

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter((item) => item !== text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  p.appendChild(deleteButton);
  result.appendChild(p);
}

window.onload = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((text) => {
    addDeleteButton(text);
  });
};

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const task = document.getElementById("task").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const text = `${task} ${date} ${time}`;

  addDeleteButton(text);

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(text);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  document.getElementById("inputContainers").style.display = "none";

  document.getElementById("task").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
});
