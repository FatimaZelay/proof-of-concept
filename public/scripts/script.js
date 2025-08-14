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
