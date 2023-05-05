import {
  todoFactory,
  projectFactory,
  addProject,
  removeProject,
  getAllTodos,
  getProjectNames,
  countProjects,
  getProjectsLength,
  addProjectTodo,
  deleteProjectTodo,
  editProjectTodo,
  storeData,
  restoreData,
} from "./data";

import * as userInterface from "./interface";
import * as control from "./control";
import "./style.css";

// const main = "here";

// console.log("projects", projects);

// const input = {
//   title: "title",
//   description: "description",
//   dueDate: "dueDate",
//   priority: "priority",
// };

// const input2 = {
//   title: "whatwhat",
//   description: "description",
//   dueDate: "dueDate",
//   priority: "priority",
// };

// addProject("second");
// projects[0].addTodo(input);
// projects[0].addTodo(input2);
// projects[0].addTodo(input);
// console.log("projects[0]", projects[0]);

// addProject("first");
// projects[1].addTodo(input2);
// projects[1].addTodo(input);
// projects[1].addTodo(input);
// // projects[0].editTodo(0, input2);
// // console.log("projects[0]", projects[0]);
// console.log(getAllTodos());
// console.log(projects[0].getProjectTodos());
// console.log(projects[1].getProjectTodos());

// console.log(getProjectNames());
// console.log(countProjects());

// // removeProject(0);
// // removeProject(1);
// // removeProject(2);
// console.log(countProjects());

// beggining of real logic
function refreshDisplay() {
  userInterface.reset();
  userInterface.displayTodos(getAllTodos(), deleteProjectTodo, editProjectTodo);
  userInterface.displayProjects(getProjectNames(), control.showProject);
  control.showCurrentProject();
  storeData();
}

const allProjectsButton = document.querySelector(".all-projects");
allProjectsButton.addEventListener("click", control.showAll);

// controls for adding a new project
const newProjectButton = document.querySelector(".new-project");
const newProjectForm = document.querySelector(".project-form");

newProjectButton.addEventListener("click", () => {
  newProjectForm.classList.toggle("hidden");
});

newProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const projectName = [...data.entries()][0][1];
  addProject(projectName);
  control.setCurrentProject(getProjectsLength() - 1);
  refreshDisplay();
  newProjectForm.reset();
  newProjectForm.classList.toggle("hidden");
});

// controls for adding a new Todo
const modal = document.querySelector("#myModal");
const newTodoButton = document.querySelector(".new-todo");
const closeModalButton = document.querySelector(".close");
const newTodoForm = document.querySelector(".todo-form");

newTodoButton.onclick = () => {
  modal.style.display = "grid";
};
function closeForm() {
  newTodoForm.reset();
  delete newTodoForm.dataset.projectIndex;
  delete newTodoForm.dataset.todoIndex;
  modal.style.display = "none";
}
window.onclick = (event) => {
  if (event.target === modal) {
    closeForm();
  }
};

closeModalButton.onclick = () => {
  closeForm();
};

newTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const values = Object.fromEntries(data.entries());
  const form = e.target;

  if (form.dataset.projectIndex) {
    console.log(form.dataset, values);
    editProjectTodo(form.dataset.projectIndex, form.dataset.todoIndex, values);
  } else {
    let currentProject = control.getCurrentProject();
    currentProject = currentProject === -1 ? 0 : currentProject;
    addProjectTodo(currentProject, values);
  }
  refreshDisplay();
  closeForm();
});

// Loading the app
window.addEventListener("load", () => {
  restoreData();
  refreshDisplay();
});
