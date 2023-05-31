const form = document.querySelector('[data-js="form"]');
const submitNewCard = document.querySelector('[data-js="submit-new-card"]');
const newCardsList = document.querySelector('[data-js="new-cards-list"]');
const inputCounterQuestion = document.querySelector(
  '[data-js="input-counter-question"]'
);
const inputCounterAnswer = document.querySelector(
  '[data-js="input-counter-answer"]'
);
const questionInput = document.querySelector('[data-js="question-input"]');
const answerInput = document.querySelector('[data-js="answer-input"]');
const maxLength = questionInput.getAttribute("maxlength");

const updateInputCounterQuestion = (characters) => {
  inputCounterQuestion.textContent = characters;
};
const updateInputCounterAnswer = (characters) => {
  inputCounterAnswer.textContent = characters;
};

updateInputCounterQuestion(maxLength);
updateInputCounterAnswer(maxLength);

questionInput.addEventListener("input", () => {
  updateInputCounterQuestion(maxLength - questionInput.value.length);
});
answerInput.addEventListener("input", () => {
  updateInputCounterAnswer(maxLength - answerInput.value.length);
});

function createNewCard(question, answer, tag) {
  const newCard = document.createElement("li");
  newCard.classList.add("card");

  const newQuestion = document.createElement("h2");
  newQuestion.textContent = question;
  newQuestion.classList.add("card-question");

  const cardButton = document.createElement("button");
  cardButton.setAttribute("type", "button");
  cardButton.classList.add("card__button");
  cardButton.textContent = "Show answer";

  const newAnswer = document.createElement("p");
  newAnswer.textContent = answer;

  const tagBox = document.createElement("ul");
  tagBox.classList.add("tags");

  const newTag = document.createElement("li");
  newTag.textContent = tag;
  newTag.classList.add("tags-li");

  newCardsList.append(newCard);
  newCard.append(newQuestion, cardButton, newAnswer, tagBox);
  tagBox.append(newTag);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cardData = event.target.elements;
  const question = cardData.formCardQuestion.value;
  const answer = cardData.formCardAnswer.value;
  const tag = "#" + cardData.formCardTag.value;

  event.target.reset();

  updateInputCounterQuestion(maxLength);
  updateInputCounterAnswer(maxLength);

  createNewCard(question, answer, tag);

  cardData.question.focus();
});
