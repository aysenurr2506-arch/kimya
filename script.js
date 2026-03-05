const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const dateDisplay = document.getElementById("dateDisplay");

// Tarihi göster
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateDisplay.innerText = new Date().toLocaleDateString('tr-TR', options);

// Başlangıçta görevleri yükle
document.addEventListener("DOMContentLoaded", renderTasks);

function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };

    const tasks = getTasks();
    tasks.push(newTask);
    saveTasks(tasks);
    
    taskInput.value = "";
    renderTasks();
}

function renderTasks() {
    const tasks = getTasks();
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        if (task.completed) li.classList.add("completed");

        li.innerHTML = `
            <span onclick="toggleTask(${task.id})">${task.text}</span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Sil</button>
        `;
        taskList.appendChild(li);
    });
}

function toggleTask(id) {
    const tasks = getTasks();
    const task = tasks.find(t => t.id === id);
    task.completed = !task.completed;
    saveTasks(tasks);
    renderTasks();
}

function deleteTask(id) {
    let tasks = getTasks();
    tasks = tasks.filter(t => t.id !== id);
    saveTasks(tasks);
    renderTasks();
}

// LocalStorage Yardımcıları
function getTasks() {
    return JSON.parse(localStorage.getItem("myTasks")) || [];
}

function saveTasks(tasks) {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
}

// Enter tuşu desteği
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

addTaskBtn.addEventListener("click", addTask);
