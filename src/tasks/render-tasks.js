import template from "./tasks-template.html?raw";
export const renderTasks = ( element ) => {
    element.innerHTML = template;
}