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

function toggleAnswer() {
  var answerBtn = document.getElementById("answerButton");
  var answerText = document.getElementById("answerText");

  if (
    answerText.classList.contains("question-card__answer-container--hidden")
  ) {
    answerText.classList.remove("question-card__answer-container--hidden");
    answerBtn.textContent = "Hide Answer";
  } else {
    answerText.classList.add("question-card__answer-container--hidden");
    answerBtn.textContent = "Show Answer";
  }
}
