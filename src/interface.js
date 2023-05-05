import { formatDistanceToNow } from "date-fns";

const modal = document.querySelector("#myModal");
const newTodoButton = document.querySelector(".new-todo");
const todoForm = document.querySelector(".todo-form");

function populateForm(todo) {
  const inputFields = todoForm.querySelectorAll("input");
  const priorityField = todoForm.querySelector("select");
  inputFields[0].value = todo.children[0].textContent;
  inputFields[1].value = todo.dataset.dueDate;
  inputFields[2].value = todo.dataset.description;
  console.log(inputFields[3].checked, "here");
  console.log(todo.dataset.done);
  console.log(todo.dataset.done);
  if (todo.dataset.done) {
    console.log("sgwhkjsfhjklg");
  }
  inputFields[3].checked = !!(todo.dataset.done === "true");
  console.log(inputFields[3].checked, "there");
  priorityField.value = todo.dataset.priority;

  todoForm.dataset.projectIndex = todo.dataset.projectIndex;
  todoForm.dataset.todoIndex = todo.dataset.todoIndex;
}

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

export function displayTodos(
  todoList,
  deleteProjectTodo,
  editProjectTodo,
  storeData
) {
  const container = document.querySelector(".todo-container");
  todoList.forEach((todo) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.priority = todo.priority;
    card.dataset.projectIndex = todo.projectIndex;
    card.dataset.todoIndex = todo.todoIndex;
    card.dataset.description = todo.description;
    card.dataset.done = todo.done;
    card.dataset.dueDate = todo.dueDate;

    const title = document.createElement("div");
    title.textContent = todo.title;

    const dueDate = document.createElement("div");
    console.log(todo.dueDate);
    dueDate.textContent = formatDistanceToNow(new Date(todo.dueDate));

    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.textContent = "edit";
    editButton.addEventListener("click", (e) => {
      newTodoButton.click();
      populateForm(e.target.parentNode);
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "delete";
    deleteButton.addEventListener("click", (e) => {
      const { projectIndex, todoIndex } = e.target.parentNode.dataset;
      deleteProjectTodo(projectIndex, todoIndex);
      e.target.parentNode.remove();
      storeData();
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
