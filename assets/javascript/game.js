// VARIABLES
// array of words to guess
var charGuess = ["stitch", "chesire cat", "dopey", "captain hook", "jasmine", "mushu", "nemo", "olaf", "peter pan", "pluto", "timon", "tinker bell"];

// new variable to set as the word to guess
var randomGuess = "";

// word to guess split into an array of letters
var splitRandomGuess = [];

var remaining = 10;

var hiddenGuess = [];

//FUNCTIONS
// picks random word from array
function randomWord() {
  var indeximg = document.getElementById('pic');
  randomGuess = charGuess[Math.floor(Math.random() * charGuess.length)];
  if (randomGuess=="dopey"){
    indeximg.src="../Hangman-Game/assets/images/dopey.png";
  }
  else if (randomGuess=="chesire cat"){
    indeximg.src="../Hangman-Game/assets/images/chesire.png";
  }
  else if (randomGuess=="stitch"){
    indeximg.src="../Hangman-Game/assets/images/stitch.png";
  }
  else if (randomGuess=="captain hook"){
    indeximg.src="../Hangman-Game/assets/images/hook.png";
  }
  else if (randomGuess=="jasmine"){
    indeximg.src="../Hangman-Game/assets/images/jasmine.png";
  }
  else if (randomGuess=="mushu"){
    indeximg.src="../Hangman-Game/assets/images/mushu.png";
  }
  else if (randomGuess=="nemo"){
    indeximg.src="../Hangman-Game/assets/images/nemo.png";
  }
  else if (randomGuess=="olaf"){
    indeximg.src="../Hangman-Game/assets/images/olaf.png";
  }
  else if (randomGuess=="peter pan"){
    indeximg.src="../Hangman-Game/assets/images/peterpan.png";
  }
  else if (randomGuess=="pluto"){
    indeximg.src="../Hangman-Game/assets/images/pluto.png";
  }
  else if (randomGuess=="timon"){
    indeximg.src="../Hangman-Game/assets/images/timon.png";
  }
  else if (randomGuess=="tinker bell"){
    indeximg.src="../Hangman-Game/assets/images/tink.png";
  }
};

// turns randomGuess into underscores
function underscore() {
  for (var i=0; i < randomGuess.length; i++){
    if (randomGuess[i]!==" "){
      hiddenGuess[i] = "_";
    }
    else {
      hiddenGuess[i]="-";
    };
  };
  var divGuess = document.getElementById('wordGuess');
  var node = document.createTextNode(hiddenGuess.join(" "));
  divGuess.appendChild(node);
  console.log(hiddenGuess);
}


// shows letter if correct (if statement)
//function showLetter() {
  //variable to store key event

// document.onkeyup = function(event) {
//   var userGuess =
// }

// decrease guess count if wrong
function guessesLeft() {

  remaining--;

};
// puts incorrect guess into letters guessed area

// show character if win

// increase win count by one if win

// show lose image if lose
