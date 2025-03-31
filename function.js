function matchNumber(p1, p2) {
  console.log(typeof p1, typeof p2);
  if (p1 > p2) {
    console.log("Plus grand");
    higherMessage();
    wrongNumber();
  } else if (p1 < p2) {
    console.log("Plus petit");
    lowerMessage();
    wrongNumber();
  } else {
    console.log("Bien joué");
    wellDoneMessage();
  }
}

function wrongNumber() {
  let attemptIsOn = document.querySelector("#attempt-message");
  if (attemptIsOn !== null) {
    attemptIsOn.remove();
  }

  playerAttempt = playerAttempt + 1;
  console.log(`${playerAttempt}`);

  let newElmAttempt = document.createElement("p");
  newElmAttempt.setAttribute("id", "attempt-message");
  newElmAttempt.textContent = `Attempts : ${playerAttempt}`;
  mainContainer.appendChild(newElmAttempt);
}

function wellDoneMessage() {
  let lowerIsOn = document.querySelector("#lower-message");
  if (lowerIsOn !== null) lowerIsOn.remove();
  let higherIsOn = document.querySelector("#higher-message");
  if (higherIsOn !== null) higherIsOn.remove();
  let attemptIsOn = document.querySelector("#attempt-message");
  if (attemptIsOn !== null) attemptIsOn.remove();
  let newElmWellDone = document.createElement("p");
  newElmWellDone.setAttribute("id", "welldone-message");
  newElmWellDone.textContent = "Well done!";
  mainContainer.appendChild(newElmWellDone);
  player2Container.style.display = "none";
  let newElmRestartGame = document.createElement("button");
  newElmRestartGame.setAttribute("id", "restart-button");
  newElmRestartGame.setAttribute("onclick", "restartGame()");
  newElmRestartGame.innerText = "Restart";
  mainContainer.appendChild(newElmRestartGame);
}

function higherMessage() {
  let lowerIsOn = document.querySelector("#lower-message");
  if (lowerIsOn !== null) lowerIsOn.remove();
  let higherIsOn = document.querySelector("#higher-message");
  if (higherIsOn !== null) {
    higherIsOn.remove();
    console.log(higherIsOn);
  }
  let newElmhigher = document.createElement("p");
  newElmhigher.setAttribute("id", "higher-message");
  newElmhigher.textContent = "Higher";
  mainContainer.appendChild(newElmhigher);
}

function lowerMessage() {
  let higherIsOn = document.querySelector("#higher-message");
  if (higherIsOn !== null) higherIsOn.remove();
  let lowerIsOn = document.querySelector("#lower-message");
  if (lowerIsOn !== null) {
    lowerIsOn.remove();
    console.log(lowerIsOn);
  }
  let newElmlower = document.createElement("p");
  newElmlower.setAttribute("id", "lower-message");
  newElmlower.textContent = "Lower";
  mainContainer.appendChild(newElmlower);
}

function restartGame() {
  location.reload();
}
