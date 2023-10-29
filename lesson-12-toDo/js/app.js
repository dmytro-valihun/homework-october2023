const enterText = document.querySelector('.input');
const listTodo = document.querySelector('.listToDo');
let tasksArr = JSON.parse(localStorage.getItem('tasks')) || [];
// renderTaskList(tasksArr);

enterText.addEventListener('keydown', getText);
listTodo.addEventListener('click', deleteTask);

function getText(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTodo(enterText.value)
    }
}

function addTodo(text) {
    if (text && text.trim() !== '') {
        tasksArr.push({name: text, isDone: false});
        localStorage.setItem('tasks', JSON.stringify(tasksArr));
        renderTaskList(tasksArr)
    }
}

function renderTaskList(tasksArr) {
    while (listTodo.firstChild) {
        listTodo.removeChild(listTodo.firstChild)
    }
    if (tasksArr.length > 0) {
        tasksArr.map((item, index) => {
            listTodo.innerHTML += `<li>${item.name} <button id=${index}>X</button></li>`
        })
    }
    enterText.value = '';
}

function deleteTask(event) {
    event.preventDefault()
    const id = event.target.id
    console.log(id)
    if (id) {
        tasksArr.splice(id, 1);
        localStorage.setItem('tasks', JSON.stringify(tasksArr));
    }
    renderTaskList(tasksArr);
}