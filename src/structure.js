const projects = [];

function todoFactory({ title, description, dueDate, priority }) {
  return {
    title,
    description,
    dueDate,
    priority,
  };
}

function projectFactory(projectName) {
  const todos = [];
  function addTodo(values) {
    todos.push(todoFactory(values));
  }
  function removeTodo(index) {
    delete todos[index];
  }
  function editTodo(index, newValues) {
    todos[index] = todoFactory(newValues);
  }
  function getProjectTodos() {
    return todos;
  }
  return {
    projectName,
    todos,
    addTodo,
    removeTodo,
    editTodo,
    getProjectTodos,
  };
}
function addProject(projectName) {
  projects.push(projectFactory(projectName));
}

function removeProject(projectIndex) {
  delete projects[projectIndex];
}

function getProjectNames() {
  return projects.map((project) => project.projectName);
}

function getAllTodos() {
  const allTodos = [];
  projects.forEach((project) => {
    project.todos.forEach((item) => {
      if (item) {
        allTodos.push(item);
      }
    });
  });
  return allTodos;
}

export {
  projects,
  todoFactory,
  projectFactory,
  addProject,
  removeProject,
  getAllTodos,
  getProjectNames,
};

// function getProjectTodos(index) {
//   const projectTodos = [];
//   projects[index].todos.forEach((item) => {
//     if (item) {
//       projectTodos.push(item);
//     }
//   });
//   return projectTodos;
// }
