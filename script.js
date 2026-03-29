const GAME_OPTIONS = ["ROCK", "PAPER", "SCISSOR"];
let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;
let draws = 0;

// Function to play a round
const playRound = (getHumanChoice) => {
  if (roundNumber >= 5) return;
  const getComputerChoice = GAME_OPTIONS[Math.floor(Math.random() * 3)];

  const winCondition =
    (getComputerChoice === "ROCK" && getHumanChoice === "PAPER") ||
    (getComputerChoice === "PAPER" && getHumanChoice === "SCISSOR") ||
    (getComputerChoice === "SCISSOR" && getHumanChoice === "ROCK");
  const loseCondition =
    (getComputerChoice === "SCISSOR" && getHumanChoice === "PAPER") ||
    (getComputerChoice === "ROCK" && getHumanChoice === "SCISSOR") ||
    (getComputerChoice === "PAPER" && getHumanChoice === "ROCK");

  const resultStatement = (result) => {
    const resultText = document.querySelector("#result");
    resultText.innerHTML = `Round: ${roundNumber}<br><br>
    Computer: ${getComputerChoice}<br>
    User: ${getHumanChoice}<br>
    Result: ${result}<br><br>
    User: ${humanScore}<br>
    Computer: ${computerScore}`;

    if (roundNumber === 5) {
      resultText.innerHTML = `Game Over<br><br>
    Result: ${
      humanScore > computerScore
        ? "You win"
        : humanScore < computerScore
        ? "You lost"
        : "Draw"
    }<br><br>
    User: ${humanScore}<br>
    Computer: ${computerScore}<br>    `;
    }
  };
  roundNumber += 1;

  if (getComputerChoice === getHumanChoice) {
    resultStatement("Draw");
    draws += 1;
  } else if (winCondition) {
    humanScore += 1;
    resultStatement("You Win");
  } else if (loseCondition) {
    computerScore += 1;
    resultStatement("You Lose");
  } else {
    resultStatement("Wrong Option");
  }
};
