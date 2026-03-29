const GAME_OPTIONS = ["ROCK", "PAPER", "SCISSOR"];
let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

// Function to return either rock, paper or scissor
const getComputerChoice = () => GAME_OPTIONS[Math.floor(Math.random() * 3)];

// Function to get human choice
const getHumanChoice = () =>
  prompt("Enter Rock, Paper or Scissor").toUpperCase();

// Function to play a round
const playRound = (getHumanChoice, getComputerChoice) => {
  const winCondition =
    (getComputerChoice === "ROCK" && getHumanChoice === "PAPER") ||
    (getComputerChoice === "PAPER" && getHumanChoice === "SCISSOR") ||
    (getComputerChoice === "SCISSOR" && getHumanChoice === "ROCK");
  const loseCondition =
    (getComputerChoice === "SCISSOR" && getHumanChoice === "PAPER") ||
    (getComputerChoice === "ROCK" && getHumanChoice === "SCISSOR") ||
    (getComputerChoice === "PAPER" && getHumanChoice === "ROCK");
  const consoleStatement = (result) =>
    alert(
      `Round:${roundNumber}\n\nComputer: ${getComputerChoice}\nUser: ${getHumanChoice}\nResult: ${result}\n\nUser:${humanScore}\nComputer:${computerScore}`
    );

  if (getComputerChoice === getHumanChoice) {
    consoleStatement("Draw");
  } else if (winCondition) {
    humanScore += 1;
    consoleStatement("You Win");
  } else if (loseCondition) {
    computerScore += 1;
    consoleStatement("You Lose");
  } else {
    consoleStatement("Wrong Option");
  }
};

const playGame = () => {
  for (let i = 0; i < 2; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    roundNumber += 1;
  }
  alert("GAME OVER");
};

playGame();
