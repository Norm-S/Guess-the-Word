// The unordered list where the player’s guessed letters will appear.
const guessedLetters = document.querySelector(".guessed-letters");

// The button with the text “Guess!” in it.
const guess = document.querySelector(".guess");

// The text input where the player will guess a letter.
const letter = document.querySelector(".letter");

// The empty paragraph where the word in progress will appear.
const wordInProgress = document.querySelector(".word-in-progress");

// The paragraph where the remaining guesses will display.
const remaining = document.querySelector(".remaining");

// The span inside the paragraph where the remaining guesses will display.
const span = document.querySelector("span");

// The empty paragraph where messages will appear when the player guesses a letter.
const message = document.querySelector(".message");

// The hidden button that will appear prompting the player to play again.
const playAgain = document.querySelector(".play-again");

const word = "magnolia";

const updateWordInProgress = function (word) {
  const censor = "●";
  const placeholder = [];
  for (let char of word) {
    placeholder.push(censor);
  }
  wordInProgress.innerText = placeholder.join("");
};

updateWordInProgress(word);

guess.addEventListener("click", function (e) {
  e.preventDefault();
  const input = letter.value;
  console.log(input);
  letter.value = "";
});
