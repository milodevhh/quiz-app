console.log("hey");

const wineBottleButton = document.querySelector(
  '[data-js="wineBottleBookmark"]'
);
const wineBottleSVG = document.querySelector(
  '[data-js="svgWineBottleBookmarkClicked"]'
);

console.log(wineBottleButton);
console.log(wineBottleSVG);

wineBottleButton.addEventListener("click", (event) => {
  wineBottleSVG.classList.toggle("wine-bottle--clicked");
  console.log("bitte");
});

const answerButton = document.querySelector('[data-js="answerButton"]');
const answerText = document.querySelector('[data-js="answerText"]');

function toggleAnswer() {
  if (
    answerText.classList.contains("question-card__answer-container--hidden")
  ) {
    answerText.classList.remove("question-card__answer-container--hidden");
    answerButton.textContent = "Hide Answer";
  } else {
    answerText.classList.add("question-card__answer-container--hidden");
    answerButton.textContent = "Show Answer";
  }
}
