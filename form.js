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
  newCard.innerHTML = `
    <section class="question-card">
      <div class="question-card__answer-container">
        <h2 aria-labelledby="question">${question}</h2>
        <p aria-label="answere" class="question-card__text"></p>
        
        <p data-js="answerText" class="question-card__answer-container">
          ${answer}
        </p>
      </div>
      <ul class="question-card__list">
        <li class="question-card__list-item">${tag}</li>
      </ul>
      <button data-js="wineBottleBookmark" class="button-wine-bottle">
        <svg
          data-js="svgWineBottleBookmarkClicked"
          fill="#000000"
          height="64px"
          width="64px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 511 511"
          xml:space="preserve">
          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path d="M311.715,157.677l-15.196-15.196c-6.138-6.139-9.519-14.3-9.519-22.981V41.141c4.899-4.31,8-10.619,8-17.641 C295,10.542,284.458,0,271.5,0h-32C226.542,0,216,10.542,216,23.5c0,7.023,3.101,13.332,8,17.641V119.5 c0,8.681-3.381,16.842-9.519,22.981l-15.196,15.196C184.27,172.692,176,192.656,176,213.892V487.5c0,12.958,10.542,23.5,23.5,23.5 h112c12.958,0,23.5-10.542,23.5-23.5V213.892C335,192.656,326.73,172.692,311.715,157.677z M239.5,15h32c4.687,0,8.5,3.813,8.5,8.5 s-3.813,8.5-8.5,8.5h-32c-4.687,0-8.5-3.813-8.5-8.5S234.813,15,239.5,15z M191,327h16.5c4.142,0,7.5-3.358,7.5-7.5 s-3.358-7.5-7.5-7.5H191v-17h32.5c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H191v-25h48.5c4.687,0,8.5,3.813,8.5,8.5v128 c0,4.687-3.813,8.5-8.5,8.5H191V327z M320,487.5c0,4.687-3.813,8.5-8.5,8.5h-112c-4.687,0-8.5-3.813-8.5-8.5V415h48.5 c12.958,0,23.5-10.542,23.5-23.5v-128c0-12.958-10.542-23.5-23.5-23.5H191v-26.108c0-17.229,6.709-33.426,18.892-45.608 l15.196-15.196c8.972-8.972,13.913-20.9,13.913-33.587V46.987c0.167,0.004,0.332,0.013,0.5,0.013h32c0.168,0,0.333-0.009,0.5-0.013 V119.5c0,12.688,4.941,24.616,13.913,33.587l15.196,15.196C313.291,180.466,320,196.663,320,213.892V487.5z" />{" "}
              <path d="M295.5,206.392c-4.142,0-7.5,3.358-7.5,7.5V287.5c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-73.608 C303,209.75,299.642,206.392,295.5,206.392z" />{" "}
              <path d="M278.481,190.911c1.464,1.465,3.384,2.197,5.303,2.197c1.919,0,3.839-0.732,5.303-2.197c2.929-2.929,2.929-7.677,0-10.606 l-15.196-15.196c-2.928-2.929-7.677-2.929-10.606,0c-2.929,2.929-2.929,7.677,0,10.606L278.481,190.911z" />{" "}
              <path d="M231.5,464H223v-24.5c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v32c0,4.142,3.358,7.5,7.5,7.5h16 c4.142,0,7.5-3.358,7.5-7.5S235.642,464,231.5,464z" />{" "}
              <path d="M279.5,464h-16c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h16c4.142,0,7.5-3.358,7.5-7.5S283.642,464,279.5,464z" />{" "}
            </g>{" "}
          </g>
        </svg>
      </button>
    </section>
`;
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
