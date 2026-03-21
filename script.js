const GAME_OPTIONS = ["ROCK", "PAPER", "SCISSOR"];

// Function to return either rock, paper or scissor
const getComputerChoice = () =>
  console.log(GAME_OPTIONS[Math.floor(Math.random() * 3)]);

// Function to get human choice
const getHumanChoice = () => {
  console.log(prompt("Enter Rock, Paper or Scissor").toUpperCase());
};

getHumanChoice();
