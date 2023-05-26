const answerButton = document.querySelector('[data-js="show-answer-button"]');
const addAnswer = document.querySelector('[data-js="hidden-answer"]');
const bookmark = document.querySelector('[data-js="bookmark"]');

answerButton.addEventListener("click", function handleClick() {
  addAnswer.classList.toggle("card__answer");

  const initialText = "Show answer";
  if (answerButton.textContent.includes(initialText)) {
    answerButton.textContent = "Hide answer";
  } else {
    answerButton.textContent = initialText;
  }
});

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("card__bookmarked");
});
