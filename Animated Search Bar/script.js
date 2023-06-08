const searchIcon = document.querySelector(".search-icon i");
const searchWrapper = document.querySelector(".search-input-wrapper");
const searchInput = document.querySelector(".search-input input");
const closeIcon = document.querySelector(".search-input i");
searchIcon.addEventListener("click", () => {
  searchIcon.parentElement.classList.add("change");
  searchWrapper.classList.add("change");
  setTimeout(() => {
    searchInput.focus();
  }, 1000);
});

closeIcon.addEventListener("click", () => {
  searchIcon.parentElement.classList.remove("change");
  searchWrapper.classList.remove("change");
});
