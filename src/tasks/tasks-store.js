import { Task } from "./task.model";

const localStorage = window.localStorage;
const storedTasks = JSON.parse(localStorage.getItem('tasks'));

const state = {
    tasks: []
}

const loadTasks = () => {
    if (storedTasks == null) return;
    state.tasks = storedTasks;
    console.table(state.tasks);
}

/**
 * @param { Task } task 
 */
const saveTasks = ( task ) => {
    state.tasks.push( task );
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
}

const deleteTask = ( taskId ) => {
    const tasks = state.tasks;
    state.tasks = tasks.filter(( task ) => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify( state.tasks ));
}

const updateTaskStatus = ( taskId ) => {
    const tasks = state.tasks;
    const task = tasks.find(( task ) => task.id == taskId);
    task.done = !task.done;
    state.tasks = tasks;
    localStorage.setItem('tasks', JSON.stringify( state.tasks ));
}

const getTasks = () => {
    return state.tasks;
}

export default {
    loadTasks,
    saveTasks,
    deleteTask,
    updateTaskStatus,
    getTasks
}