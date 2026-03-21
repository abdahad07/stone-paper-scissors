const GAME_OPTIONS = ["Rock", "Paper", "Scissors"];

// Function to return either rock, paper or scissor
const getComputerChoice = () =>
  console.log(GAME_OPTIONS[Math.floor(Math.random() * 3)]);

getComputerChoice();
