const main = document.querySelector("#main");
const cards = document.querySelectorAll(".usercard");
let cardPosition = 0;
const totalCards = cards.length;

document
  .getElementById("btn-next-user")
  .addEventListener("click", moveToNextCard);
document
  .getElementById("btn-prev-user")
  .addEventListener("click", moveToPrevCard);

function moveToNextCard() {
  if (cardPosition === totalCards - 1) {
    cardPosition = 0;
  } else {
    cardPosition++;
  }
}

function moveToPrevCard() {
  console.log("moving to the prev card!");
}
