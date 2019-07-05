var btnPlay = document.getElementById("btnPlay");
var cell1 = document.getElementById("cell1");
var cell2 = document.getElementById("cell2");
var cell3 = document.getElementById("cell3");
var cell4 = document.getElementById("cell4");
var cell5 = document.getElementById("cell5");
var cell6 = document.getElementById("cell6");

var isSunk = false;
var location1;
var location2;
var location3;
var guess;
var guessesRemaining = 3;
var hits = 0;

function resetCell(cell, text){
  cell.classList.remove("hit");
  cell.style.color = "wheat"
  cell.innerHTML = text;
};

function gameStart() {
  location1 = Math.floor(Math.random() * (5 - 1) + 1);
  location2 = location1 + 1;
  location3 = location2 + 1;
  console.log("Game Start!");
  console.log(location1);
  console.log(location2);
  console.log(location3);
  guess = 0;
  guessesRemaining = 3
  hits = 0;
  isSunk = false;
  resetCell(cell1, "1");
};

function attackCell1() {
  guess = 1;
  guessesRemaining--;

  if (cell1.innerHTML == "Hit!") {
    console.log("again");
  } else if (guess == location1 || guess == location2 || guess == location3) {
    hits++;
    cell1.classList.add("hit");
    cell1.style.color = "orange";
    cell1.innerHTML = "Hit!";
    cell1.style.hover = ""
  } else {
    cell1.innerHTML = "Miss!"
  }
}

btnPlay.onclick = function(){gameStart()};

cell1.onclick = function(){attackCell1()};

///////////////////////////////////////////////////////////////////

// HOVER BUG SOLUTION FOR TOMORROW //

// document.getElementById("mydiv").onmouseover = function() {
//     this.style.backgroundColor = "blue";

///////////////////////////////////////////////////////////////////

// OLD CODE //

// function gameStart() {
//   while (hits < 3 && guessesRemaining > 0) {
//   guess = prompt("Fire! (0-6):");
//     if (guess > 6) {
//       alert("Too Far!");
//     } else if (guess < 0) {
//       alert("Too Close!");
//     } else if (guess == location1) {
//       alert("Hit!");
//       location1 = null;
//       hits++;
//       guessesRemaining--;
//     } else if (guess == location2) {
//       alert("Hit!");
//       location2 = null;
//       hits++;
//       guessesRemaining--;
//     } else if (guess == location3) {
//       alert("Hit!");
//       location3 = null;
//       hits++;
//       guessesRemaining--;
//     } else if (guess != location3 || location2 || location3) {
//       alert("Miss!");
//       guessesRemaining--;
//     };
//   };
//
//   if (hits == 3) {
//     alert("Win");
//     hits = 0;
//     guessesRemaining = 3;
//   }  else if (guessesRemaining == 0) {
//     alert("You Lose!");
//     hits = 0;
//     guessesRemaining = 3;
//   }
// };
//
// btnPlay.onclick = function() {gameStart()};
