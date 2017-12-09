var hangman = {
  charGuess: ["stitch", "chesire cat", "dopey", "captain hook", "jasmine", "mushu", "nemo", "olaf", "peter pan", "pluto", "timon", "tinker bell"],
  randomGuess: "",
  splitRandomGuess: [],
  randomWord: function() {
    var indeximg = document.getElementById('pic');
    this.randomGuess = this.charGuess[Math.floor(Math.random() * this.charGuess.length)];
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
  },
  


}
