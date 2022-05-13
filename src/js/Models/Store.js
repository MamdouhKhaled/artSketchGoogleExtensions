class Task {
    static getTasks() {
        return JSON.parse(localStorage.getItem("tasks")) ?? []

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

module.exports = Task