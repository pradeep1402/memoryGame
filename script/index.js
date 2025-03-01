const startGame = () => {
  const card = document.querySelectorAll('.card');

  addEventListener("click", (event) => {
    event.target.style.backgroundColor = 'black';

    setTimeout(() => {
      event.target.style.backgroundColor = 'lightgreen';
    }, 2000);
  });
};

window.onload = startGame;