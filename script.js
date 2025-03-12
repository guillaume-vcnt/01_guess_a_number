player2Container.style.display = "none";

startButton.addEventListener("click", function () {
  valuePlayer1 = parseInt(player1.value);
  console.log("🥇", valuePlayer1);
  if (valuePlayer1 < 1 || valuePlayer1 > 50 || isNaN(valuePlayer1)) {
    let alertIsOn = document.querySelector("#alert-message");
    if (alertIsOn !== null) alertIsOn.remove();
    let newElmAlert = document.createElement("p");
    newElmAlert.setAttribute("id", "alert-message");
    newElmAlert.textContent = "Choose a valid number!";
    newElmAlert.style.color = "red";
    mainContainer.appendChild(newElmAlert);
  } else {
    let alertIsOn = document.querySelector("#alert-message");
    if (alertIsOn !== null) alertIsOn.remove();
    player1Container.style.display = "none";
    player2Container.style.display = "block";
  }
});

guessButton.addEventListener("click", function () {
  let valuePlayer2 = parseInt(player2.value);
  console.log("🥈", valuePlayer2);
  if (valuePlayer2 < 1 || valuePlayer2 > 50 || isNaN(valuePlayer2)) {
    let alertIsOn = document.querySelector("#alert-message");
    if (alertIsOn !== null) alertIsOn.remove();
    let newElmAlert = document.createElement("p");
    newElmAlert.setAttribute("id", "alert-message");
    newElmAlert.textContent = "Choose a valid number!";
    newElmAlert.style.color = "red";
    mainContainer.appendChild(newElmAlert);
  } else {
    let alertIsOn = document.querySelector("#alert-message");
    if (alertIsOn !== null) alertIsOn.remove();
    matchNumber(valuePlayer1, valuePlayer2);
  }
});

// Note : Un paramètre Javascript ne fait que stocker la valeur qui lui est passée au moment de l'appel d'une fonction. Il ne garde pas d'information au-delà de cette exécution, à moins qu'il ne stocke cette valeur ailleurs, par exemple dans une variable globale, un objet, ou une base de données.

//Note : La fonction isNaN() peut être utilisée pour vérifier si une valeur est un "Not-a-Number" (NaN), ce qui inclut les cas où l'input est vide. En JavaScript, lorsqu'un champ de saisie (input) est vide, il est traité comme une chaîne vide "", qui, lorsqu'elle est convertie en nombre avec parseInt(), donne NaN.
