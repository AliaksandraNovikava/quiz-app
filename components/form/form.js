const form = document.querySelector('[data-js="form"]');
const submitNewCard = document.querySelector('[data-js="submit-new-card"]');
const newCardsList = document.querySelector('[data-js="new-cards-list"]');

function createNewCard(question, answer, tag) {
  const newCard = document.createElement("li");
  newCard.classList.add("card");

  const newQuestion = document.createElement("h2");
  newQuestion.textContent = question;
  newQuestion.classList.add("card-question");

  const newAnswer = document.createElement("p");
  newAnswer.textContent = answer;

  const tagBox = document.createElement("ul");
  tagBox.classList.add("tags");

  const newTag = document.createElement("li");
  newTag.textContent = tag;
  newTag.classList.add("tags-li");

  newCardsList.append(newCard);
  newCard.append(newQuestion, newAnswer, tagBox);
  tagBox.append(newTag);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const cardData = Object.fromEntries(formData);
  const cardData = event.target.elements;
  const question = cardData.formCardQuestion.value;
  const answer = cardData.formCardAnswer.value;
  const tag = "#" + cardData.formCardTag.value;

  event.target.reset();

  createNewCard(question, answer, tag);

  cardData.question.focus();
});
