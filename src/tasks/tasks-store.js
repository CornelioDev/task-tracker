import { Task } from "./task.model";

const localStorage = window.localStorage;
const storedTasks = JSON.parse(localStorage.getItem('tasks'));

const state = {
    tasks: []
}

const loadTasks = () => {
    if (storedTasks == null) return;
    state.tasks = storedTasks;
}

/**
 * @param { Task } task 
 */
const saveTasks = ( task ) => {
    state.tasks.push( task );
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
}

const getTasks = () => {
    return state.tasks;
}

export default {
    loadTasks,
    saveTasks,
    getTasks
}