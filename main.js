const round = document.querySelectorAll(".playRound");
const winner = document.querySelector("#winner");
const result = document.querySelector("#result");

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else if (computerChoice === 2) {
    return "scissors";
  }
}

let humanScore = 0;

let computerScore = 0;

function playRound(humanChoice) {
  const computerSelection = getComputerChoice();

  const rounds = humanScore + computerScore === 5;

  if (rounds) {
    humanScore > computerScore
      ? (winner.innerText = "The winner is HUMAN!")
      : (winner.innerText = "The winner is COMPUTER!");
    return;
  }

  if (humanChoice.target.value === "rock" && computerSelection === "paper") {
    computerScore += 1;
    result.innerText =
      "You lost! Paper beats Rock " +
      "Score: " +
      " Computer: " +
      computerScore +
      " x " +
      " Human: " +
      humanScore;
  } else if (
    humanChoice.target.value === "paper" &&
    computerSelection === "rock"
  ) {
    humanScore += 1;
    result.innerText =
      "You won! Paper beats Rock " +
      "Score: " +
      " Computer: " +
      computerScore +
      " x " +
      " Human: " +
      humanScore;
  } else if (
    humanChoice.target.value === "paper" &&
    computerSelection === "scissors"
  ) {
    computerScore += 1;
    result.innerText =
      "You lost! Scissors beats Paper " +
      "Score: " +
      " Computer: " +
      computerScore +
      " x " +
      " Human: " +
      humanScore;
  } else if (
    humanChoice.target.value === "scissors" &&
    computerSelection === "paper"
  ) {
    humanScore += 1;
    result.innerText =
      "You won! Scissors beats Paper " +
      "Score: " +
      " Computer: " +
      computerScore +
      " x " +
      " Human: " +
      humanScore;
  } else if (
    humanChoice.target.value === "scissors" &&
    computerSelection === "rock"
  ) {
    computerScore += 1;
    result.innerText =
      "You lost! Rock beats scissors " +
      "Score: " +
      " Computer: " +
      computerScore +
      " x " +
      " Human: " +
      humanScore;
  } else if (
    humanChoice.target.value === "rock" &&
    computerSelection === "scissors"
  ) {
    humanScore += 1;
    result.innerText =
      "You won! Rock beats scissors " +
      "Score: " +
      " Computer: " +
      computerScore +
      " x " +
      " Human: " +
      humanScore;
  } else {
    return (result.innerText = "It's a draw play again.");
  }
}

round.forEach((element) => element.addEventListener("click", playRound));
