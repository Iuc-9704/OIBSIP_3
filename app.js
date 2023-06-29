let tasks = [];
function addTask(){
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== ""){
        const task = {
            text: taskText,
            completed: false,
            addedAt: new Date()
        };
        tasks.push(task);
        taskInput.value = "";
        renderTasks();
    }
}
function markComplete(index){
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}
function deleteTask(index){
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks(){
    const pendingTasksList = document.getElementById("pendingTasksList");
    const completedTasksList = document.getElementById("completedTasksList");
    pendingTasksList.innerHTML = "";
    completedTasksList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${task.text}</span>`;

        if(task.completed){
            li.classList.add("complete");
            li.innerHTML += `<span class="status">Completed</span>`;
            completedTasksList.appendChild(li);
        }else{
            const completeButton = document.createElement("button");
            completeButton.innerHTML = "Complete";
            completeButton.addEventListener("click", () => markComplete(index));
            li.appendChild(completeButton);
            pendingTasksList.appendChild(li);
        }

        const deleteButton =  document.createElement("span");
        deleteButton.innerHTML = "x";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", () => deleteTask(index));
        li.appendChild(deleteButton);
    });
}

renderTasks();
