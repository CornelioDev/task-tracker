import { Task } from "./task.model";
import { v4 as uuid } from "uuid";
import tasksStore from "./tasks-store";
import { renderTasks } from "./render-tasks";

export const createTask = ( element ) => {
    const form = document.querySelector('form');
    const taskDescription = form.querySelector('[name="new-task"]');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const task = newTask( taskDescription.value );
        tasksStore.saveTasks( task );
        taskDescription.value = ''; // Reset input text
        renderTasks( element );
    })
}

const newTask = ( description ) => {
    const task = new Task();
    task.id = uuid();
    task.description = description;
    task.done = false;
    //console.info('New Task', task);
    return task;
}