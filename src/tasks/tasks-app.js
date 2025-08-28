import template from "./tasks.template.html?raw";
import { createTask } from "./create-task";
import { renderTasks } from "./render-tasks"
import tasksStore from "./tasks-store";
export const tasksApp = ( element ) => {
    element.innerHTML = template;
    tasksStore.loadTasks();
    renderTasks( element );
    createTask( element );
}