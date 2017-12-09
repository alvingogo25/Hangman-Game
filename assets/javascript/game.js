// VARIABLES
// array of words to guess
var charGuess = ["stitch", "chesire-cat", "dopey", "captain-hook", "jasmine", "mushu", "nemo", "olaf", "peter-pan", "pluto", "timon", "tinker-bell"];

// new variable to set as the word to guess
var randomWord = "";

// word to guess split into an array of letters
var splitRandomWord = [];

var winner = 0;
  var winCounter = document.getElementById('wins');
  winCounter.innerHTML = winner;

var remaining = 10;
  var guessCounter = document.getElementById('guessLeft');
  guessCounter.innerHTML = remaining;

var answer = [];

var wrongGuess = [];


//FUNCTIONS
// picks random word from array
function getWord() {
  var indeximg = document.getElementById('pic');
  randomWord = charGuess[Math.floor(Math.random() * charGuess.length)];
  if (randomWord=="dopey"){
    indeximg.src="../Hangman-Game/assets/images/dopey.png";
  }
  else if (randomWord=="chesire-cat"){
    indeximg.src="../Hangman-Game/assets/images/chesire.png";
  }
  else if (randomWord=="stitch"){
    indeximg.src="../Hangman-Game/assets/images/stitch.png";
  }
  else if (randomWord=="captain-hook"){
    indeximg.src="../Hangman-Game/assets/images/hook.png";
  }
  else if (randomWord=="jasmine"){
    indeximg.src="../Hangman-Game/assets/images/jasmine.png";
  }
  else if (randomWord=="mushu"){
    indeximg.src="../Hangman-Game/assets/images/mushu.png";
  }
  else if (randomWord=="nemo"){
    indeximg.src="../Hangman-Game/assets/images/nemo.png";
  }
  else if (randomWord=="olaf"){
    indeximg.src="../Hangman-Game/assets/images/olaf.png";
  }
  else if (randomWord=="peter-pan"){
    indeximg.src="../Hangman-Game/assets/images/peterpan.png";
  }
  else if (randomWord=="pluto"){
    indeximg.src="../Hangman-Game/assets/images/pluto.png";
  }
  else if (randomWord=="timon"){
    indeximg.src="../Hangman-Game/assets/images/timon.png";
  }
  else if (randomWord=="tinker-bell"){
    indeximg.src="../Hangman-Game/assets/images/tink.png";
  }
};

// splits randomWord to match answer array
function strSplit() {
  for (var x =0; x<randomWord.length; x++) {
    splitRandomWord.push(randomWord[x]);
  }
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
  var divGuess = document.getElementById('wordGuess');
  divGuess.innerHTML = answer.join(" ");
};




// shows letter if correct (if statement)
document.onkeyup = function showLetter() {
  // checks is user input is a letter
  if (event.keyCode>=65 && event.keyCode<=90){
    //variable to store user key press
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  // checks if letter matches letters in randomWord
  if (randomWord.includes(userGuess)){
    // loop to display correct user guess in correct index
    for (var j=0; j <randomWord.length; j++){
      if (userGuess===randomWord[j]) {
        answer[j]=userGuess;
        // displays correct guess
        var divGuess = document.getElementById('wordGuess');
        divGuess.innerHTML = answer.join(" ");
        }
      }
    }
    // checks incorrect guesses
    else {
      // checks if user has already guessed input
      if (wrongGuess.includes(userGuess)) {
        wrongGuess = wrongGuess
        }
      else {
        //decreases counter by 1
        var guessCount = document.getElementById('guessLeft');
        guessCount.innerHTML = remaining--;
        //updates letters guessed array
        wrongGuess.push(userGuess);
        var wrongLetter = document.getElementById('wrong');
        wrongLetter.innerHTML = wrongGuess.join("  ");
        }
      }
    }
  };

  function win() {
    if (answer===splitRandomWord) {
      var winCount = document.getElementById('wins');
      winCount.innerHTML = winner++;
    }
  };
