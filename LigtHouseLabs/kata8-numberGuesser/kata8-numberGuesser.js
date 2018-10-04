const prompt = require("prompt-sync")();

// Renerate random number between 1 - 100;
const secretNumber = +Math.ceil(Math.random() * 100) + 1;
// Object to store frequency of guesses
let prevGuesses = {};
// count of guesses made, except repeated numbers and invalid inputs;
let counter = 0;

//function to update state
const updateState = answer => {
  if (prevGuesses[answer]) {
    console.log("Already guessed !, Guess again");
    answer = Number(prompt(">"));
  } else {
    prevGuesses[answer] = true;
    counter++;
  }
};

// Ask for a number first time
let answer;
console.log("Guess a number between 1 and 100");
answer = Number(prompt(">"));
updateState(answer);

while (answer !== secretNumber) {
  if (!answer) {
    console.log("Invalid input !, Guess again");
    answer = Number(prompt(">"));
  } else if (answer < secretNumber) {
    console.log("Too Low !, Guess again");
    answer = Number(prompt(">"));
    updateState(answer);
  } else if (answer > secretNumber) {
    console.log("Too high !, Guess again");
    answer = Number(prompt(">"));
    updateState(answer);
  }
}

console.log(
  `Congratulation !!!, ${answer} is correct,you took ${counter} attempts`
);
