import {
  addProject,
  removeProject,
  getAllTodos,
  getProjectNames,
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

function refreshDisplay() {
  userInterface.reset();
  userInterface.displayTodos(
    getAllTodos(),
    deleteProjectTodo,
    editProjectTodo,
    storeData
  );
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
  values.done = values.done === "on";
  console.log(values);
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
