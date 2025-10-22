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

function getHumanChoice() {
  let humanChoice = prompt("Choice an option: Rock, Paper or Scissors");
  return humanChoice.toLowerCase();
}

let humanScore = 0;

let computerScore = 0;
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    return (
      "You lost! Paper beats Rock " +
      "Score: " +
      " Computer: " +
      computerScore +
      " x " +
      " Human: " +
      humanScore
    );
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
    return (
      "You won! Paper beats Rock " +
      "Score: " +
      " Computer: " +
      computerScore +
      " x " +
      " Human: " +
      humanScore
    );
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    return (
      "You lost! Scissors beats Paper " +
      "Score: " +
      " Computer: " +
      computerScore +
      " x " +
      " Human: " +
      humanScore
    );
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1;
    return (
      "You won! Scissors beats Paper " +
      "Score: " +
      " Computer: " +
      computerScore +
      " x " +
      " Human: " +
      humanScore
    );
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    return (
      "You lost! Rock beats scissors " +
      "Score: " +
      " Computer: " +
      computerScore +
      " x " +
      " Human: " +
      humanScore
    );
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    return (
      "You won! Rock beats scissors " +
      "Score: " +
      " Computer: " +
      computerScore +
      " x " +
      " Human: " +
      humanScore
    );
  } else {
    return "draw!";
  }
}

function playGame() {
  const humanSelection = getHumanChoice();

  const computerSelection = getComputerChoice();

  console.log(playRound(humanSelection, computerSelection));
}

playGame();
playGame();
playGame();
playGame();
playGame();
