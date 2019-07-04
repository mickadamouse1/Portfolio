var btnPlay = document.getElementById("btnPlay");

var isSunk = false;
var location1;
var location2;
var location3;
var guess;
var guessesRemaining = 3;
var hits = 0;

location1 = 4;
location2 = location1 + 1;
location3 = location2 + 1;


function gameStart() {
  while (hits < 3 && guessesRemaining > 0) {
  guess = prompt("Fire! (0-6):");
    if (guess > 6) {
      alert("Too Far!");
    } else if (guess < 0) {
      alert("Too Close!");
    } else if (guess == location1) {
      alert("Hit!");
      location1 = null;
      hits++;
      guessesRemaining--;
    } else if (guess == location2) {
      alert("Hit!");
      location2 = null;
      hits++;
      guessesRemaining--;
    } else if (guess == location3) {
      alert("Hit!");
      location3 = null;
      hits++;
      guessesRemaining--;
    } else if (guess != location3 || location2 || location3) {
      alert("Miss!");
      guessesRemaining--;
    };
  };

  if (hits == 3) {
    alert("Win");
    hits = 0;
    guessesRemaining = 3;
  }  else if (guessesRemaining == 0) {
    alert("You Lose!");
    hits = 0;
    guessesRemaining = 3;
  }
};

btnPlay.onclick = function() {gameStart()};
