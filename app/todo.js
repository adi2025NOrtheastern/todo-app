export class TODO{
    constructor(id, title, description, dueDate, dueTime, status)
    {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueTime = dueTime;
        this.dueDate = dueDate;
        this.status = status;
    }


    getTodo(){
        return `${this.id} ${this.title} ${this.description} ${this.dueTime} ${this.dueDate} ${this.status}`;
    }
}