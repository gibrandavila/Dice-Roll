function rollDice() {
  var randomNumber = Math.floor(Math.random() * 6 + 1);
  return randomNumber;
}

function diceStates(numVariable, diceMode) {
  if (numVariable === 1) {
    document
      .querySelector(`.dice ${diceMode}`)
      .setAttribute("src", "./images/dice1.png");
  }
  if (numVariable === 2) {
    document
      .querySelector(`.dice ${diceMode}`)
      .setAttribute("src", "./images/dice2.png");
  }
  if (numVariable === 3) {
    document
      .querySelector(`.dice ${diceMode}`)
      .setAttribute("src", "./images/dice3.png");
  }

  if (numVariable === 4) {
    document
      .querySelector(`.dice ${diceMode}`)
      .setAttribute("src", "./images/dice4.png");
  }

  if (numVariable === 5) {
    document
      .querySelector(`.dice ${diceMode}`)
      .setAttribute("src", "./images/dice5.png");
  }

  if (numVariable === 6) {
    document
      .querySelector(`.dice ${diceMode}`)
      .setAttribute("src", "./images/dice6.png");
  }
}
function rollDiceBtn() {
  var genNum1 = rollDice();
  var genNum2 = rollDice();
  diceStates(genNum1, ".img1");
  diceStates(genNum2, ".img2");
  if (genNum1 === genNum2) {
    document.querySelector(".container h1").innerHTML =
      "Tie ! <br/>Roll Again!";
  } else if (genNum1 > genNum2) {
    document.querySelector(".container h1").innerHTML = "Player 1 Won";
  } else if (genNum1 < genNum2) {
    document.querySelector(".container h1").innerHTML = "Player 2 Won";
  }
}
