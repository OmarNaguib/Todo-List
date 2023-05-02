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

export function displayTodos(todoList) {
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

    const description = document.createElement("div");
    description.textContent = todo.description;

    card.appendChild(title);
    card.appendChild(dueDate);
    card.appendChild(description);

    container.appendChild(card);
  });
}
