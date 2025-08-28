import { createTask } from "./create-task";
import { renderTasks } from "./render-tasks"

export const tasksApp = ( element ) => {
    renderTasks( element );
    createTask();
}