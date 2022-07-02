export { Task, tasks }

class Task {
    description = "";
    deadline = "";
    category = "";
    constructor(description: string, deadline: string, category: string) {
        this.description = description;
        this.deadline = deadline;
        this.category = category;
    }

    addToList() {
        // 
    }

}

let tasks: object[] = [];