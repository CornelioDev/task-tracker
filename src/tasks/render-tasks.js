import { deleteTask } from "./create-task";
import tasksStore from "./tasks-store";

export const renderTasks = ( element ) => {
    const taskList = tasksStore.getTasks();
    const taskContainer = element.querySelector('#tasks-container');
    taskContainer.innerHTML = '';
    taskList.forEach(task => {
        taskContainer.insertAdjacentHTML('afterbegin', taskItem( task ));
    });
    deleteTask( element );
}

const taskItem = ( task ) => {
    return `<div class="task" data-id="${ task.id }">
                <input type="checkbox" ${ task.done }>
                <span>${ task.description }</span>
                <a href="#" class="icon-action">x</a>
            </div>`;
}