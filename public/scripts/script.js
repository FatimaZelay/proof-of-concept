const filterForm = document.querySelector(".filter-bar form");
const dropdown = document.getElementById("category-filter");

if (filterForm && dropdown) {
  dropdown.addEventListener("change", e => {
    e.preventDefault(); // Stop full page reload
    filterCards(dropdown.value);
  });
}

function filterCards(category) {
  const updateCards = () => {
    document.querySelectorAll(".card").forEach(card => {
      card.style.display =
        category === "all" || card.dataset.category === category
          ? "block"
          : "none";
    });
  };

  if (document.startViewTransition) {
    document.startViewTransition(updateCards);
  } else {
    updateCards();
  }
}
  btn.addEventListener('click', () => {
    btn.classList.add('spinning');

    // Remove the class after animation finishes
    setTimeout(() => {
      btn.classList.remove('spinning');
    }, 1000); // Match animation duration
  });
