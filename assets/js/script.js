let task = [];
let addID = 0;

const taskInput = document.getElementById("taskInput");
const taskBtn = document.getElementById("addTaskBtn");
const taskTotal = document.getElementById("totalTasks");
const taskComplete = document.getElementById("completedTasks");
const taskID = document.getElementById("taskIds");
const taskName = document.getElementById("taskNames");
const taskAction = document.getElementById("taskActions");

taskBtn.addEventListener("click", () => {
    const newTask = taskInput.value.trim();  

    if (newTask === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    
    addID++;

    
    task.push({ id: addID, name: newTask, completed: false });

    console.log(task);

    
    taskInput.value = "";

    
    updateTaskList();
});

function updateTaskList() {
    
    taskID.innerHTML = "";
    taskName.innerHTML = "";
    taskAction.innerHTML = "";

    
    let totalTasks = task.length;
    let completedTasks = task.filter(task => task.completed).length;

    
    task.forEach(task => {
        
        const taskIdElement = document.createElement("li");
        taskIdElement.textContent = task.id;

       
        const taskNameElement = document.createElement("li");
        taskNameElement.textContent = task.name;

        
        const taskActionElement = document.createElement("li");
        
       
        const taskCheckbox = document.createElement("input");

        taskCheckbox.type = "checkbox";
        taskCheckbox.checked = task.completed; 
        taskCheckbox.addEventListener("change", () => {
            task.completed = taskCheckbox.checked;  

            console.log(task.completed);
            console.log(task);


            updateTaskList();  
        });
        
        const deleteButton = document.createElement("button");
        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fas", "fa-xmark");  
        deleteButton.appendChild(deleteIcon);

        deleteButton.addEventListener("click", () => {
            deleteTask(task.id);
            task.completed ? taskCheckbox.checked : alert("Esta tarea no está completada, ¿estás seguro que quieres eliminarla?");
        });

        
        taskActionElement.appendChild(taskCheckbox);
        taskActionElement.appendChild(deleteButton);

        
        taskID.appendChild(taskIdElement);
        taskName.appendChild(taskNameElement);
        taskAction.appendChild(taskActionElement);
    });

    
    updateCounters(totalTasks, completedTasks);
}

function updateCounters(total, completed) {
   
    taskTotal.textContent = total;
    taskComplete.textContent = completed;
}


function deleteTask(taskId) {
    
    task = task.filter(t => t.id !== taskId);

    
    updateTaskList();
}