const addButton = document.getElementById("add");

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("inputContainers").style.display = "block";
});

const submitButton = document.getElementById("submitBtn");
const result = document.getElementById("result");

window.onload = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((text) => {
    const p = document.createElement("p");
    p.innerText = text;
    p.className = "styled-box";
    result.appendChild(p);
  });
};

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const task = document.getElementById("task").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const p = document.createElement("p");
  p.innerText = `Užduotis: ${task}, data: ${date} laikas: ${time}`;

  result.appendChild(p);

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(p.innerText);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  document.getElementById("inputContainers").style.display = "none";

  document.getElementById("task").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";

  p.className = "styled-box";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.style.marginLeft = "10px";

  deleteButton.addEventListener("click", () => {
    p.remove();

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter((item) => item !== p.innerText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  p.appendChild(deleteButton);
  result.appendChild(p);
});
