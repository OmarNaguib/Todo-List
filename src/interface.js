export default function displayProjects(nameList) {
  const projectNav = document.querySelector(".projects");
  nameList.forEach((name, index) => {
    const button = document.createElement("button");
    button.classList.add("project");
    button.textContent = name;
    button.dataset.projectNumber = index;
    projectNav.appendChild(button);
  });
}
