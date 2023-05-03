export function displayProjects(nameList, buttonHandler) {
  const projectNav = document.querySelector(".projects");
  nameList.forEach((name, index) => {
    const listElement = document.createElement("li");
    const button = document.createElement("button");

    button.classList.add("project");
    button.textContent = name;
    button.dataset.projectIndex = index;
    button.addEventListener("click", buttonHandler);
    listElement.appendChild(button);
    projectNav.appendChild(listElement);
  });
}

export function displayTodos(todoList, deleteProjectTodo, refreshDisplay) {
  const container = document.querySelector(".todo-container");
  todoList.forEach((todo) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.priority = todo.priority;
    card.dataset.projectIndex = todo.projectIndex;
    card.dataset.todoIndex = todo.todoIndex;

    const title = document.createElement("div");
    title.textContent = todo.title;

    const dueDate = document.createElement("div");
    dueDate.textContent = todo.dueDate;

    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.textContent = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "delete";
    deleteButton.addEventListener("click", (e) => {
      const { projectIndex, todoIndex } = e.target.parentNode.dataset;
      deleteProjectTodo(projectIndex, todoIndex);
      e.target.parentNode.remove();
    });

    card.appendChild(title);
    card.appendChild(dueDate);
    card.appendChild(editButton);
    card.appendChild(deleteButton);

    container.appendChild(card);
  });
}

export function reset() {
  const projectNav = document.querySelector(".projects");
  const container = document.querySelector(".todo-container");
  projectNav.innerHTML = "";
  container.innerHTML = "";
}

// const description = document.createElement("div");
// description.textContent = todo.description;
