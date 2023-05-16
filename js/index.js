const addAnswerButton = document.querySelector(
  '[data-js="show-answer-button"]'
);
const addHiddenAnswer = document.querySelector('[data-js="hidden-answer"]');
const addBookmark = document.querySelector('[data-js="bookmark-button"]');

addAnswerButton.addEventListener("click", () => {
  addHiddenAnswer.classList.toggle("answer");
});

addBookmark.addEventListener("click", () => {
  addBookmark.classList.toggle("bookmarked");
});
