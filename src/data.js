const projects = [];

function todoFactory({
  title,
  description,
  dueDate,
  priority,
  projectIndex,
  todoIndex,
  done = false,
}) {
  return {
    title,
    description,
    dueDate,
    priority,
    projectIndex,
    todoIndex,
    done,
  };
}

function projectFactory(projectName, projectIndex) {
  // eslint-disable-next-line prefer-const
  let todos = [];
  function addTodo(values) {
    const todoIndex = todos.length;
    todos.push(todoFactory({ ...values, projectIndex, todoIndex }));
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
    projectIndex,
    todos,
    addTodo,
    removeTodo,
    editTodo,
    getProjectTodos,
  };
}
function addProject(projectName) {
  projects.push(projectFactory(projectName, projects.length));
}

function getProjectsLength() {
  return projects.length;
}

const countProjects = function countNonEmptyProjects() {
  return projects.filter((project) => !!project).length;
};

function removeProject(projectIndex) {
  if (countProjects() >= 2) delete projects[projectIndex];
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

function addProjectTodo(projectIndex, values) {
  projects[projectIndex].addTodo(values);
}

function deleteProjectTodo(projectIndex, todoIndex) {
  projects[projectIndex].removeTodo(todoIndex);
}
function editProjectTodo(projectIndex, todoIndex, newValues) {
  projects[projectIndex].editTodo(todoIndex, {
    projectIndex,
    todoIndex,
    ...newValues,
  });
}

// Code for Local Storage

function storeData() {
  const storageObject = {};
  projects.forEach((project) => {
    storageObject[project.projectName] = project.todos;
  });
  localStorage.setItem("projects", JSON.stringify(storageObject));
}
const isEmpty = projects.length === 0;
function restoreData() {
  if (localStorage.projects && isEmpty) {
    const storedProjects = JSON.parse(localStorage.projects);
    Object.keys(storedProjects).forEach((key, index) => {
      addProject(key);
      storedProjects[key].forEach((todo) => {
        projects[index].addTodo(todo);
      });
    });
  }
}

// add the default project
if (!localStorage.projects && isEmpty) {
  addProject("default");
}

export {
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
