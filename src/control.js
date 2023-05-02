// store the state of the project and functions that affect it
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
  console.log(projectCards);
}
