// get user choices
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Your choice is not available");
  }
};

// get computer choice
const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else if (computerChoice === 2) {
    return "scissors";
  } else {
    return -1;
  }
};

// determining the winner
const determineWinner = (userChoice, computerChoice) => {
  if (computerChoice === userChoice) {
    return "The game was a tie!";
  }

  if (userChoice === "bomb") {
    return "You won";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won";
    } else {
      return "You won";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won";
    } else {
      return "You won";
    }
  }
};

// play game
const playGame = () => {
  let userChoice = getUserChoice("bomb");
  let computerChoice = getComputerChoice();

  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));

  // determineWinner(userChoice, computerChoice);
};

console.log(playGame());
