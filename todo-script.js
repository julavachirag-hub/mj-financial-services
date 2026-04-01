// todo-script.js

// Initialize tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerText = task.text;
        if (task.completed) li.classList.add('completed');

        // Add edit button
        const editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        editBtn.onclick = () => editTask(index);

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Function to add task
function addTask(taskText) {
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Function to edit task
function editTask(index) {
    const newText = prompt('Edit your task:', tasks[index].text);
    if (newText) {
        tasks[index].text = newText;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
}

// Function to delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Function to complete task
function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Function to filter tasks
function filterTasks(filter) {
    // Filtering logic based on filter value
}

// Event listener to add task
document.getElementById('add-task-btn').onclick = () => {
    const taskInput = document.getElementById('task-input');
    addTask(taskInput.value);
    taskInput.value = '';
};

// Initial render
renderTasks();