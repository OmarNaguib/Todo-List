import {
  projects,
  todoFactory,
  projectFactory,
  addProject,
  removeProject,
  getAllTodos,
  getProjectNames,
  countProjects,
} from "./structure";

import * as userInterface from "./interface";
import * as control from "./control";
import "./style.css";

const main = "here";

console.log("projects", projects);

const input = {
  title: "title",
  description: "description",
  dueDate: "dueDate",
  priority: "priority",
};

const input2 = {
  title: "whatwhat",
  description: "description",
  dueDate: "dueDate",
  priority: "priority",
};

addProject("second");
projects[0].addTodo(input);
projects[0].addTodo(input2);
projects[0].addTodo(input);
console.log("projects[0]", projects[0]);

addProject("first");
projects[1].addTodo(input2);
projects[1].addTodo(input);
projects[1].addTodo(input);
// projects[0].editTodo(0, input2);
// console.log("projects[0]", projects[0]);
console.log(getAllTodos());
console.log(projects[0].getProjectTodos());
console.log(projects[1].getProjectTodos());

console.log(getProjectNames());
console.log(countProjects());

// removeProject(0);
// removeProject(1);
// removeProject(2);
console.log(countProjects());

// beggining of real logic
function buildProject() {
  userInterface.reset();
  userInterface.displayProjects(getProjectNames(), control.showProject);
  userInterface.displayTodos(getAllTodos());
}

const allProjectsButton = document.querySelector(".all-projects");
allProjectsButton.addEventListener("click", control.showAll);

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
  buildProject();
  newProjectForm.reset();
  newProjectForm.classList.toggle("hidden");
});

buildProject();
