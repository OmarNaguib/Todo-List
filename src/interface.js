function showProject(e) {
  const { projectIndex } = e.target.dataset;
  const allCards = document.querySelectorAll(".card");
  const projectCards = document.querySelectorAll(
    `.card[data-project-index="${projectIndex}"]`
  );

  allCards.forEach((card) => {
    card.style.display = "none";
  });
  projectCards.forEach((card) => {
    card.style.display = "block";
  });
  console.log(projectCards);
}

export function displayProjects(nameList) {
  const projectNav = document.querySelector(".projects");
  nameList.forEach((name, index) => {
    const listElement = document.createElement("li");
    const button = document.createElement("button");

    button.classList.add("project");
    button.textContent = name;
    button.dataset.projectIndex = index;
    button.addEventListener("click", showProject);
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
