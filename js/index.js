// const addAnswerButton = document.querySelector(
//   '[data-js="show-answer-button"]'
// );
// const addHiddenAnswer = document.querySelector('[data-js="hidden-answer"]');
// const addBookmark = document.querySelector('[data-js="bookmark-button"]');

// addAnswerButton.addEventListener("click", () => {
//   addHiddenAnswer.classList.toggle("answer");
// });

const darkMode = document.querySelector('[data-js="checkbox"]');

darkMode.addEventListener("click", () => {
  if (document.body.classList.contains("body-dark")) {
    document.body.classList.remove("body-dark");
  } else {
    document.body.classList.add("body-dark");
  }
});
