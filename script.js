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
