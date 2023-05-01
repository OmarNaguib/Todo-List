export default function displayProjects(nameList) {
  const projectNav = document.querySelector(".projects");
  nameList.forEach((name, index) => {
    const listElement = document.createElement("li");
    const button = document.createElement("button");
    button.classList.add("project");
    button.textContent = name;
    button.dataset.projectNumber = index;
    listElement.appendChild(button);
    projectNav.appendChild(listElement);
  });
}
