# 🎲 Dice Duel — Two Player Dice Game

This is a simple web-based dice game for two players. Each time the "Roll" button is clicked, two dice are rolled randomly, one for each player. The game displays the result visually using dice images and declares the winner or a tie.

---

## 🚀 Features

- Simulates the roll of a six-sided dice for each player.
- Dynamically updates the dice images based on the result.
- Displays the winner or indicates a tie.
- Engaging and easy-to-use interface.

---

## 🧩 How It Works

### JavaScript Logic

- `rollDice()`  
  Generates a random number between 1 and 6.

- `diceStates(numVariable, dicePlayer)`  
  Updates the image of a specific dice (either `.img1` or `.img2`) based on the number rolled.

- `rollDiceBtn()`  
  - Rolls the dice for Player 1 and Player 2.  
  - Updates both dice images.  
  - Compares the two numbers and declares:
    - `"Player 1 Won"` if Player 1's number is greater.
    - `"Player 2 Won"` if Player 2's number is greater.
    - `"Tie! Roll Again!"` if both numbers are equal.

---

## 🖼️ Dice Images

Dice images are expected to be stored in the `/images/` directory as:
