const clearAllTimeouts = (setTimeoutsId) => {
  for (const timeoutId of setTimeoutsId) {
    clearInterval(timeoutId);
  }

  setTimeoutsId.clear();
};

const closeAllOpenedCards = (clickedCards) => {
  for (const clickedCard of clickedCards) {
    clickedCard.classList.remove('open_card');
  }

  clickedCards.clear();
};

const openCards = (clickedCards) => {
  for (const clickedCard of clickedCards) {
    clickedCard.classList.add('open_card');
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

    const timeoutId = setTimeout(() => {
      closeAllOpenedCards(clickedCards);
    }, 2000);

    setTimeoutsId.add(timeoutId);
  });

};

window.onload = startGame;