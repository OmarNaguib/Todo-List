import {
  projects,
  todoFactory,
  projectFactory,
  addProject,
  removeProject,
  getAllTodos,
  getProjectTodos,
} from "./structure";
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
projects[0].addTodo(input);
projects[0].addTodo(input);
console.log("projects[0]", projects[0]);

addProject("first");
projects[1].addTodo(input);
projects[1].addTodo(input);
projects[1].addTodo(input);
// projects[0].editTodo(0, input2);
// console.log("projects[0]", projects[0]);
console.log(getAllTodos());
console.log(getProjectTodos(0));
console.log(getProjectTodos(1));
