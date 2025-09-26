
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.innerHTML = '✔';
    completeButton.setAttribute('aria-label', 'Complete task'); 
    completeButton.onclick = () => {
        taskSpan.classList.toggle('completed');
    };

    const removeButton = document.createElement('button');
    removeButton.innerHTML = '✖';  
    removeButton.className = 'remove-btn';
    removeButton.setAttribute('aria-label', 'Remove task'); 
    removeButton.onclick = () => {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(completeButton);
    listItem.appendChild(taskSpan);
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
    taskInput.value = '';
    
    taskInput.focus();
}

document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
