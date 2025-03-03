//Function must randomly return rock paper or scrissors (use Math.random)

//write a function that takes the users choice of rock paper or scissors (use prompt method)
//to make sure that the user enters a correct choice and to account for incorrect input, use a while or do while loop. for example, while the input is !== to correct input, call function to prompt again.

//increment the player scores so that the game can end

//whoever reaches the score of 3 first, wins

let roundCount = 1;
let humanScore = 0;
let compueterScore = 0;
let computerChoice;
let humanChoice;

let getComputerChoice = () => {
  return Math.floor(Math.random() * 3);
};

do {
  //get computer choice
  computerChoice = getComputerChoice();

  roundCount++;
} while (roundCount <= 5);
