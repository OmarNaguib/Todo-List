// store the state of the project and functions that affect it
let currentDisplayedProject = -1;

export function setCurrentProject(projectIndex) {
  currentDisplayedProject = projectIndex;
}

export function getCurrentProject() {
  return currentDisplayedProject;
}

export function showProject(e) {
  const { projectIndex } = e.target.dataset;
  const allCards = document.querySelectorAll(".card");
  const projectCards = document.querySelectorAll(
    `.card[data-project-index="${projectIndex}"]`
  );

  allCards.forEach((card) => {
    card.classList.add("hidden");
  });
  projectCards.forEach((card) => {
    card.classList.remove("hidden");
  });
  setCurrentProject(projectIndex);
}

export function showAll() {
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((card) => {
    card.classList.remove("hidden");
  });
  setCurrentProject(-1);
}

export function showCurrentProject() {
  if (currentDisplayedProject === -1) {
    showAll();
  } else {
    showProject({
      target: { dataset: { projectIndex: currentDisplayedProject } },
    });
  }
}
