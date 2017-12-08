// variables
// array of words to guess
var charGuess = ["stitch", "chesire cat", "dopey", "captain hook", "jasmine", "mushu", "nemo", "olaf", "peter pan", "pluto", "timon", "tinker bell"];

// new variable to set as the word to guess
var randomGuess = "";

// word to guess split into an array of letters
var splitRandomGuess = [];

// picks random word from array
function randomWord() {
  var indeximg = document.getElementById('pic');
  randomGuess = charGuess[Math.floor(Math.random() * charGuess.length)];
  if (randomGuess=="dopey"){
    indeximg.src="../Hangman-Game/assets/images/dopey.png";
  }
  if (randomGuess=="chesire cat"){
    indeximg.src="../Hangman-Game/assets/images/chesire.png";
  }
  if (randomGuess=="stitch"){
    indeximg.src="../Hangman-Game/assets/images/stitch.png";
  }
  if (randomGuess=="captain hook"){
    indeximg.src="../Hangman-Game/assets/images/hook.png";
  }
  if (randomGuess=="jasmine"){
    indeximg.src="../Hangman-Game/assets/images/jasmine.png";
  }
  if (randomGuess=="mushu"){
    indeximg.src="../Hangman-Game/assets/images/mushu.png";
  }
  if (randomGuess=="nemo"){
    indeximg.src="../Hangman-Game/assets/images/nemo.png";
  }
  if (randomGuess=="olaf"){
    indeximg.src="../Hangman-Game/assets/images/olaf.png";
  }
  if (randomGuess=="peter pan"){
    indeximg.src="../Hangman-Game/assets/images/peterpan.png";
  }
  if (randomGuess=="pluto"){
    indeximg.src="../Hangman-Game/assets/images/pluto.png";
  }
  if (randomGuess=="timon"){
    indeximg.src="../Hangman-Game/assets/images/timon.png";
  }
  if (randomGuess=="tinker bell"){
    indeximg.src="../Hangman-Game/assets/images/tink.png";
  }
};

// splits splitRandomGuess into an array of letters
// split word to individual divs and spans
function spanSplit() {
  splitRandomGuess = randomGuess.split("");
  for (var i=0; i<splitRandomGuess.length; i++){
    var divletter = document.createElement("div");
    var divGuess = document.getElementById("wordGuess");
    divletter.id = 'letterGuess' + i;
    if (splitRandomGuess[i]!==" ") {
      divletter.className = 'inline letter';
      }
    else {
      divletter.className = 'inline space';
      };
    divGuess.appendChild(divletter);
    var spanletter = document.createElement("span");
    var node = document.createTextNode(splitRandomGuess[i]);
    spanletter.appendChild(node);
    spanletter.className = 'hide';
    var spanGuess = document.getElementById("letterGuess" + i);
    spanGuess.appendChild(spanletter);
    };
    console.log(splitRandomGuess);
  };

// shows letter if correct (if statement)
function showLetter() {
  //variable to store key event
  document.addEventListener("keyup", )

  };

  };
// decrease guess count if wrong
function guessesLeft() {
  var remaining = 8;
  remaining--;

};
// puts incorrect guess into letters guessed area

// show character if win

// increase win count by one if win

// show lose image if lose
