let buttons = document.querySelectorAll("button");
let cardReveal = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let moves = 0;
let matches = 0;
let timer = false;
let time = 30;
let countDown = null;
let showTime = document.getElementById("t-restante");
let firstTime= 30;
const bottonReset= document.getElementById("btn-reiniciar")


// Añadiendo eventos a los buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    revealCard(button.id);
  });
});
// Desordenando el arreglo
let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

numbers = numbers.sort(() => {
  return Math.random() - 0.5;
});


function cardLock() {
  buttons.forEach((button) =>{
    button.innerHTML = numbers[button.id];
    button.disabled = true;
  });
}

function counterTimer() {
  countDown = setInterval(() => {
    time--;
    showTime.innerHTML = `Tiempo: ${time} segundos`;
    if (time == 0) {
      clearInterval(countDown);
      cardLock();
    }
  }, 1000);
}

function revealCard(id) {
  if (timer == false) {
    counterTimer();
    timer = true;
  }

  cardReveal++;

  if (cardReveal == 1) {
    //mostrar primer número
    card1 = document.getElementById(id);
    firstResult = numbers[id];
    card1.innerHTML = firstResult;

    // deshabilito el botón
    card1.disabled = true;

    // capturo en sengudo valor
  } else if (cardReveal == 2) {
    card2 = document.getElementById(id);
    secondResult = numbers[id];
    card2.innerHTML = secondResult;
    card2.disabled = true;

    // incrementar movimiento

    moves++;
    // actulizar los movimientos en el dom
    let showMoves = document.getElementById("movimientos");
    showMoves.innerHTML = `Movimientos: ${moves}`;

    if (firstResult == secondResult) {
      cardReveal = 0; //reset del contando de carta volteadas
      matches++; // aumento el contador de aciertos por pares iguales
      // Actualizo el dom en aciertos
      let showMatches = document.getElementById("aciertos");
      showMatches.innerHTML = `Aciertos: ${matches}`;

      if (matches == 8) {
        clearInterval(countDown);
        showMatches.innerHTML = `Aciertos: ${matches} 😲`;

        showMoves.innerHTML = `Movimientos: ${moves} <br>
        🖖😎`;

        showTime.innerHTML= `Fantastico! 🎉 sólo te demoraste ${firstTime - time} segundos`
      }
    } else {
      // mostrar momentaneamente valores y volver a tapar las card
      setTimeout(() => {
        card1.innerHTML = " ";
        card2.innerHTML = " ";
        card1.disabled = false;
        card2.disabled = false;
        cardReveal = 0;
      }, 800);
    }
  }
}

bottonReset.addEventListener("click", () => {
  location.reload();
});