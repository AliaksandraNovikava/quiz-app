const darkMode = document.querySelector('[data-js="checkbox"]');

darkMode.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }
});
