import { Task } from "./task.model";
import { v4 as uuid } from "uuid";

export const createTask = () => {
    const form = document.querySelector('form');
    const taskDescription = form.querySelector('[name="new-task"]');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const task = newTask( taskDescription.value );
        saveTask( task );
        taskDescription.value = ''; // Reset input text
    })
}

const newTask = ( description ) => {
    const task = new Task();
    task.id = uuid();
    task.description = description;
    task.done = false;
    console.info('New Task', task);
    return task;
}

/**
 * Save new tasks into localStorage
 * @param {Task} Task 
 */
const saveTask = ( Task ) => {
    const localStorage = window.localStorage;
    localStorage.setItem(Task.id, JSON.stringify(Task));
    console.table(localStorage);
}