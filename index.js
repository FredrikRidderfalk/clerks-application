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

function hideAllCards() {
  for (let card of cards) {
    card.classList.remove("usercard--visible");
    card.classList.add("usercard--hidden");
  }
}

function moveToNextCard() {
  hideAllCards();

  if (cardPosition === totalCards - 1) {
    cardPosition = 0;
  } else {
    cardPosition++;
  }

  cards[cardPosition].classList.add("usercard--visible");
  cards[cardPosition].classList.remove("usercard--hidden");
}

function moveToPrevCard() {
  console.log("moving to the prev card!");
}

// for of loop applied on an array of objects

// const people = [{ name: 'Karl', location: 'UK' }, { name: 'Steve', location: 'US' }];
// for (const person of people) {
//     console.log(person.name);
//     console.log(person.location);
// }
