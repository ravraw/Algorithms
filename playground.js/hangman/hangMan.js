"use strict";

const Hangman = function(word, guessesAllowed) {
  this.word = word.toLowerCase().split("");
  this.guessesAllowed = guessesAllowed;
  this.guessedLetters = ["j", "t"];
};

// Protoypes

Hangman.prototype.getPuzzle = function() {
  let puzzle = "";

  this.word.forEach(letter => {
    if (this.guessedLetters.includes(letter) || letter === " ") {
      puzzle += letter;
    } else {
      puzzle += "*";
    }
  });
  return puzzle;
};
//Insstances
const game1 = new Hangman("javascript", 3);

console.log(game1.getPuzzle());
