// VARIABLES
// array of words to guess
var charGuess = ["stitch", "cheshire-cat", "dopey", "captain-hook", "jasmine", "mushu", "nemo", "olaf", "peter-pan", "pluto", "timon", "tinker-bell"];

// new variable to set as the word to guess
var randomWord = "";

// sets wins
var winner = 0;
  document.getElementById('wins').innerHTML = winner;

// sets remaining guesses
var remaining = 10;

// empty array for correct guesses
var answer = [];

// empty array for incorrect guesses
var wrongGuess = [];

var changePic = document.getElementById('pic');

//FUNCTIONS
// picks random word from array
function getWord() {
  randomWord = charGuess[Math.floor(Math.random() * charGuess.length)];
  changePic.src = "../Hangman-Game/assets/images/clue/" + randomWord + ".png";
  document.getElementById('guessLeft').innerHTML = remaining;
  document.getElementById('wrong').innerHTML = wrongGuess;
};

// turns randomWord into underscores
function underscore() {
  for (var i=0; i < randomWord.length; i++){
    if (randomWord[i]!=="-"){
      answer[i] = "_";
    }
    else {
      answer[i]=randomWord[i];
    };
  };
  document.getElementById('wordGuess').innerHTML = answer.join(" ");
};

// win counter
function win() {
  if (!answer.includes("_")) {
    document.getElementById('wins').innerHTML = winner += 1;
    changePic.src = "../Hangman-Game/assets/images/reveal/" + randomWord + ".jpg";
    document.getElementById('mickey').play();
    resetbtn();
  }
};

// makes reset button
function resetbtn(){
  document.getElementById('reset').innerHTML = "<button id=\"btn\" class=\"font\" onclick=\"playagain()\">Play Again</button>"
};

// changes image and plays track if user loses
function lose() {
  if (remaining===0){
    changePic.src = "../Hangman-Game/assets/images/chernabog.jpg";
    document.getElementById('bald').play();
    resetbtn();
  }
};

// resets game
function playagain() {
  answer = [];
  randomWord = "";
  remaining = 10;
  wrongGuess = [];
  getWord();
  underscore();
  document.getElementById('reset').innerHTML = "Press any key to begin!"
};

// shows letter if correct (if statement)
document.onkeyup = function showLetter() {
  // checks if user input is a letter
  if (event.keyCode>=65 && event.keyCode<=90) {
    //variable to store user key press
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  // checks if letter matches letters in randomWord
  if (randomWord.includes(userGuess)){
    // loop to display correct guess in correct index
    for (var j=0; j <randomWord.length; j++){
      if (userGuess===randomWord[j]) {
        answer[j]=userGuess;
        // displays correct guess
        document.getElementById('wordGuess').innerHTML = answer.join(" ");
        }
      }
      win();
    }
    // checks incorrect guesses
    else {
      // checks if user has already guessed input
      if (wrongGuess.includes(userGuess)) {
        wrongGuess = wrongGuess
      }
      else {
        //decreases counter by 1
        if (remaining > 0){
          document.getElementById('guessLeft').innerHTML = remaining -= 1;

          //updates letters guessed array
          wrongGuess.push(userGuess);
          document.getElementById('wrong').innerHTML = wrongGuess.join("  ");
          lose();
        }
        else {
          wrongGuess = wrongGuess;
        }
      }
    }
    }
  };
