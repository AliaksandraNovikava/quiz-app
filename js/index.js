const addAnswerButton = document.querySelector(
  '[data-js="show-answer-button"]'
);
const addAnswer = document.querySelector('[data-js="hidden-answer"]');
const Bookmark = document.querySelector('[data-js="bookmark"]');

addAnswerButton.addEventListener("click", function handleClick() {
  addAnswer.classList.toggle("card__answer");

  const initialText = "Show answer";
  if (
    addAnswerButton.textContent
      .toLowerCase()
      .includes(initialText.toLowerCase())
  ) {
    addAnswerButton.textContent = "Hide answer";
  } else {
    addAnswerButton.textContent = initialText;
  }
});

Bookmark.addEventListener("click", () => {
  Bookmark.classList.toggle("card__bookmarked");
});

// const darkMode = document.querySelector('[data-js="checkbox"]');

// darkMode.addEventListener("click", () => {
//   if (document.body.classList.contains("body-dark")) {
//     document.body.classList.remove("body-dark");
//   } else {
//     document.body.classList.add("body-dark");
//   }
// });
