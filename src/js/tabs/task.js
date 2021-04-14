function getTime() {
    let dateTime = new Date();
    Hours = dateTime.getHours();
    Minutes = dateTime.getMinutes();
    Seconds = dateTime.getSeconds();
    return `${Hours}:${Minutes}:${Seconds}`;
}
class View {
    static display() {
        //get Data form storge and show it

        const tasks = Store.getTasks();
        tasks.forEach((task, index) => this.addTask(task, index));
    }
    static addTask(task, index) {
        index = index != null ? index : Store.getTasks().length;
        var tasks = document.querySelector(".list-items");
        let row = document.createElement("li");
        let deleteBTN = document.createElement("i");
        deleteBTN.appendChild(document.createTextNode("Delete"));
        deleteBTN.classList.add("delete");
        row.dataset.index = index;

        row.appendChild(document.createTextNode(task.title));
        row.appendChild(deleteBTN);
        tasks.appendChild(row);
    }

    static removeTask(item) {
        item.remove();
        var list = document.querySelectorAll(".list-items li");
        list.forEach((item, index) => {
            list[index].dataset.index = index;
        });
        console.log(list);
        // row.dataset.index = index;
    }
    static complateTask(item) {
        item.classList.toggle("complated");
    }
    static clearForm() {
        var form = document.querySelector("#add-task").reset();
    }
}

class Task {
    constructor(title, completed, time) {
        this.title = title;
        this.time = getTime();
        this.completed = completed || false;
        this.deleted = false;
    }
}

class Store {
    static getTasks() {
        return localStorage.getItem("tasks") === null ? [] :
            JSON.parse(localStorage.getItem("tasks"));
    }

    static addTask(task) {
        // Get all Task
        let tasks = this.getTasks();
        //Push new one
        tasks.push(task);
        // Save agin
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    static removeTask(id) {
        let tasks = this.getTasks();
        tasks.splice(id, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    static complateTask(id) {
        let tasks = this.getTasks();
        tasks[id].completed = !tasks[id].completed;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

window.addEventListener("DOMContentLoaded", () => {
    View.display();
});

// Add New Task
document.querySelector("#add-task").addEventListener("submit", (e) => {
    e.preventDefault();
    task_title = document.querySelector("#item").value;
    task = new Task(task_title);
    View.addTask(task);
    Store.addTask(task);
    View.clearForm();
});

// one Click For Compalte
document.querySelector(".list-items").addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        Store.removeTask(e.target.parentElement.dataset.index);
        View.removeTask(e.target.parentElement);
    }
    if (e.target.classList.contains("delete") == false) {
        View.complateTask(e.target);
        Store.complateTask(e.target.dataset.index);
        console.log(e.target.dataset.index);
    }
});