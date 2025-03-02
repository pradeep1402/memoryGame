const clearAllTimeouts = (setTimeoutsId) => {
  for (const timeoutId of setTimeoutsId) {
    clearTimeout(timeoutId);
  }

  setTimeoutsId.clear();
};

const closeAllOpenedCards = (clickedCards) => {
  return setTimeout(() => {
    if (areColorMatches(clickedCards)) {
      removeCards(clickedCards);
      return;
    };

    for (const clickedCard of clickedCards) {
      clickedCard.classList.add('closed_cards');
    }
    clickedCards.clear();
  }, 2000);
};

const openCards = (clickedCards) => {
  for (const clickedCard of clickedCards) {
    clickedCard.classList.remove('closed_cards');
  }
};

const areColorMatches = ([...clickedCards]) => {
  return clickedCards[0].className === clickedCards[1]?.className;
};

const removeCards = (clickedCards) => {
  for (const clickedCard of clickedCards) {
    clickedCard.classList.add('remove_card');
  }
  clickedCards.clear();
};

const startGame = () => {
  const setTimeoutsId = new Set();
  const clickedCards = new Set();

  addEventListener("click", (event) => {
    if (!(event.target.classList.contains('card')) || clickedCards.size >= 2) return;

    clickedCards.add(event.target);
    openCards(clickedCards);
    clearAllTimeouts(setTimeoutsId);

    const timeoutId = closeAllOpenedCards(clickedCards);
    setTimeoutsId.add(timeoutId);
  });

};

window.onload = startGame;