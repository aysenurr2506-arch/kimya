const input = document.getElementById('taskInput');
const btn = document.getElementById('addTaskBtn');
const list = document.getElementById('taskList');
const remainingEl = document.getElementById('remainingCount');
const doneEl = document.getElementById('doneCount');

// LocalStorage anahtarı
const STORAGE_KEY = 'my_nitelikli_app_tasks';

let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function updateApp() {
    list.innerHTML = '';
    let doneCount = 0;

    tasks.forEach((task, index) => {
        if(task.done) doneCount++;
        
        const div = document.createElement('div');
        div.className = `todo-item ${task.done ? 'completed' : ''}`;
        div.innerHTML = `
            <div class="checkbox" onclick="toggleTask(${index})"></div>
            <span onclick="toggleTask(${index})">${task.text}</span>
            <div class="delete-btn" onclick="deleteTask(${index})">Sil</div>
        `;
        list.appendChild(div);
    });

    // İstatistikleri güncelle
    remainingEl.innerText = tasks.length - doneCount;
    doneEl.innerText = doneCount;
    
    // Veriyi kaydet
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function addTask() {
    const text = input.value.trim();
    if(!text) return;
    
    tasks.push({ text: text, done: false });
    input.value = '';
    updateApp();
}

window.toggleTask = (index) => {
    tasks[index].done = !tasks[index].done;
    updateApp();
};

window.deleteTask = (index) => {
    tasks.splice(index, 1);
    updateApp();
};

// Dinleyiciler
btn.addEventListener('click', addTask);
input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') addTask();
});

// İlk yükleme
updateApp();
