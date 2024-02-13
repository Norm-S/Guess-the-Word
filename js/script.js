// The unordered list where the player’s guessed letters will appear.
const guessedLettersDisplay = document.querySelector(".guessed-letters");

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
const guessedLetters = [];

const makeGuess = function (char) {
  const c = char.toUpperCase();
  if (guessedLetters.includes(c)) {
    message.innerText = `You've already guessed ${c} already, try again.`;
  } else {
    guessedLetters.push(c);
    // console.log(guessedLetters);
    updateGuessedLetterDisplay();
    updateWordInProgress(guessedLetters);
  }
};

const addPlaceholder = function (word) {
  const censor = "●";
  const placeholder = [];
  for (let char of word) {
    placeholder.push(censor);
  }
  wordInProgress.innerText = placeholder.join("");
};

const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    message.innerText = "Please enter a character";
  } else if (input.length > 1) {
    message.innerText = "Please on enter one character";
  } else if (!input.match(acceptedLetter)) {
    message.innerText = "Please only enter an alphabetical character";
  } else {
    return input;
  }
};

const updateGuessedLetterDisplay = function () {
  guessedLettersDisplay.innerHTML = "";
  for (let letter of guessedLetters) {
    let li = document.createElement("li");
    li.innerText = letter;
    guessedLettersDisplay.append(li);
  }
};

const updateWordInProgress = function (guessedLetters) {
  const wordUpper = word.toUpperCase();
  const wordArray = wordUpper.split("");

  let inProgressDisplay = wordInProgress.innerText.split("");
  for (let letter of guessedLetters) {
    wordArray.forEach(function (char, i) {
      if (letter === char) {
        inProgressDisplay[i] = char;
      }
    });
  }
  wordInProgress.innerText = inProgressDisplay.join("");
  checkWinCondition();
};

const checkWinCondition = function () {
  if (wordInProgress.innerText === word.toUpperCase()) {
    message.classList.add("win");
    message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
  }
};

addPlaceholder(word);
updateWordInProgress(guessedLetters);

guess.addEventListener("click", function (e) {
  e.preventDefault();
  const input = letter.value;
  console.log(input);
  letter.value = "";

  message.innerText = "";
  const result = validateInput(input);
  console.log(result);
  if (result !== undefined) {
    makeGuess(result);
  }
});
