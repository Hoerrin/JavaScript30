let cards = [card1, card2, card3, card4, card5];

const resetCards = () => {
  for (let otherCard of cards) {
    otherCard.classList.remove("card--selected");
  }

  Array.from(document.getElementsByClassName("card__textSecondary--top")).forEach(
    (item) => {
      item.classList.remove("card__textSecondary--selected");
    }
  );

  Array.from(document.getElementsByClassName("card__textSecondary--bottom")).forEach(
    (item) => {
        item.classList.remove("card__textSecondary--selected");
    }
  );
  
  Array.from(document.getElementsByClassName("card__textPrimary")).forEach(
    (item) => {
      item.classList.remove("card__textPrimary--selected");
    }
  );
};

for (let card of cards) {
  card.addEventListener("click", () => {
    resetCards();
    card.children[0].classList.add("card__textSecondary--selected");
    card.children[1].classList.add("card__textPrimary--selected");
    card.children[2].classList.add("card__textSecondary--selected");
    card.classList.add("card--selected");
  });
}
