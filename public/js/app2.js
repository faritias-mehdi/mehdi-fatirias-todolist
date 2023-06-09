
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        let task = createTaskElement(taskText);
        let todoColumn = document.getElementById("todoColumn");
        todoColumn.appendChild(task);
        taskInput.value = "";
    }
}

function createTaskElement(taskText) {
    let task = document.createElement("div");
    task.className = "task";

    let taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;

    let icons = document.createElement("div");
    icons.className = "task-icons";

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash-alt";
    deleteIcon.addEventListener("click", function () {
        task.remove();
    });

    let editIcon = document.createElement("i");
    editIcon.className = "fas fa-edit";
    editIcon.addEventListener("click", function () {
        let asketulisateure = prompt("quoid")
        editIcon.parentElement.previousElementSibling.textContent = asketulisateure
    });


    let selectContainer = document.createElement("div");
    selectContainer.className = "select-container";

    let select = document.createElement("select");
    select.addEventListener("change", function () {
        let selectedColumnId = select.value;
        let selectedColumn = document.getElementById(selectedColumnId);
        selectedColumn.appendChild(task);
    });

    let todoOption = document.createElement("option");
    todoOption.value = "todoColumn";
    todoOption.text = "À faire";

    let doingOption = document.createElement("option");
    doingOption.value = "doingColumn";
    doingOption.text = "En cours";

    let doneOption = document.createElement("option");
    doneOption.value = "doneColumn";
    doneOption.text = "Terminé";

    select.appendChild(todoOption);
    select.appendChild(doingOption);
    select.appendChild(doneOption);

    icons.appendChild(deleteIcon);
    icons.appendChild(editIcon);
    selectContainer.appendChild(select);

    task.appendChild(taskTextElement);
    task.appendChild(icons);
    task.appendChild(selectContainer);

    return task;
}
