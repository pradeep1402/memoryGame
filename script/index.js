const clearAllTimeouts = (setTimeoutsId) => {
  for (const timeoutId of setTimeoutsId) {
    clearInterval(timeoutId);
  }

  setTimeoutsId.clear();
};

const closeAllOpenedCards = (clickedCards) => {
  return setTimeout(() => {
    if (areColorMatches(clickedCards)) removeCards(clickedCards);
    for (const clickedCard of clickedCards) {
      clickedCard.classList.remove('open_card');
    }
    clickedCards.clear();
  }, 2000);
};

const openCards = (clickedCards) => {
  for (const clickedCard of clickedCards) {
    clickedCard.classList.add('open_card');
  }
};

const areColorMatches = ([...clickedCards]) => {
  return clickedCards[0].className === clickedCards[1]?.className;

};

const removeCards = (clickedCards) => {
  for (const clickedCard of clickedCards) {
    clickedCard.style.display = 'none';
  }
};

const startGame = () => {
  const setTimeoutsId = new Set();
  const clickedCards = new Set();

  addEventListener("click", (event) => {
    if (!(event.target.classList.contains('card'))) return;

    clickedCards.add(event.target);
    openCards(clickedCards);
    clearAllTimeouts(setTimeoutsId);

    const timeoutId = closeAllOpenedCards(clickedCards);
    setTimeoutsId.add(timeoutId);
  });

};

window.onload = startGame;