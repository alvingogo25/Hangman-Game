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
// split word to individual spans (for loop to put string into spans)
function spanSplit() {
  splitRandomGuess = randomGuess.split("");
  for (var i=0; i<splitRandomGuess.length; i++){
    if (splitRandomGuess[i]!==" ") {
      var spanletter = document.createElement("span");
      var node = document.createTextNode(splitRandomGuess[i]);
      spanletter.appendChild(node);
      spanletter.className = 'letter';
      var element = document.getElementById("wordGuess");
      element.appendChild(spanletter);
      }
    else {
      var spanletter = document.createElement("span");
      var node = document.createTextNode(splitRandomGuess[i]);
      spanletter.appendChild(node);
      spanletter.className = 'space';
      var element = document.getElementById("wordGuess");
      element.appendChild(spanletter);
      };
    };
  };
// displays correct guess (if statement)

// decrease guess count if wrong

// show character if win

// show lose image if lose
// shows the letter if correct
function showLetter() {
    var x = document.getElementById("").value;
    document.getElementById("").innerHTML = x;
  }

function showsomething() {
  document.write("hello");
};
