console.log("test");

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
});

const todoList = document.querySelector('[data-js="addNewCard"]');

function createList(question, answer, tag) {
  console.log("submit event is fired!");
  const newCard = document.createElement("li");
  todoList.append(newCard);
  newCard.textContent = `question:${question}  |  answer:${answer}  |  tag:${tag}`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const question = data.question;
  const answer = data.answer;
  const tag = data.tag;
  console.log(data);
  event.target.reset();
  event.target.elements.question.focus();
  createList(question, answer, tag);
});
