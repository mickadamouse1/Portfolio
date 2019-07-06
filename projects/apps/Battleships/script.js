var btnPlay = document.getElementById("btnPlay");
var cell1 = document.getElementById("cell1");
var cell2 = document.getElementById("cell2");
var cell3 = document.getElementById("cell3");
var cell4 = document.getElementById("cell4");
var cell5 = document.getElementById("cell5");
var cell6 = document.getElementById("cell6");

var gameStarted = false;
var location1;
var location2;
var location3;
var guess;
var guessesRemaining = 3;
var hits = 0;

function setHoverColour(cell, hoverColour, hoverOutColour) { // NOT YET USED
  cell.onmouseover = function() {
    this.style.backgroundColor = hoverColour;
  }
  cell.onmouseout = function() {
    this.style.backgroundColor = hoverOutColour;
  }
}

function resetCell(cell, text) {
  cell.classList.remove("hit");
  cell.style.color = "wheat";
  cell.style.backgroundColor = "#333"
  cell.innerHTML = text;
}

function styleCell(cell, text, color, backgroundColor) {
  cell.innerHTML = text;
  cell.style.color = color;
  cell.style.backgroundColor = backgroundColor;
}

function gameStart() {
  gameStarted = true;
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
  resetCell(cell1, "1");
  resetCell(cell2, "2");
  resetCell(cell3, "3");
  resetCell(cell4, "4");
  resetCell(cell5, "5");
  resetCell(cell6, "6");
}

function winGame() {
  styleCell(cell1, "Win!","whitesmoke", "steelblue");
  styleCell(cell2, "Win!","whitesmoke", "steelblue");
  styleCell(cell3, "Win!","whitesmoke", "steelblue");
  styleCell(cell4, "Win!","whitesmoke", "steelblue");
  styleCell(cell5, "Win!","whitesmoke", "steelblue");
  styleCell(cell6, "Win!","whitesmoke", "steelblue");
}

function loseGame() {
  styleCell(cell1, "Lose!","whitesmoke", "crimson");
  styleCell(cell2, "Lose!","whitesmoke", "crimson");
  styleCell(cell3, "Lose!","whitesmoke", "crimson");
  styleCell(cell4, "Lose!","whitesmoke", "crimson");
  styleCell(cell5, "Lose!","whitesmoke", "crimson");
  styleCell(cell6, "Lose!","whitesmoke", "crimson");
}

function attackCell(cellLocation, cell) {
  guess = cellLocation;
  console.log(`guess: ${guess}`);
  if (gameStarted == false) {
    console.log("*PRESS PLAY TO START*");
  } else if (hits == 3) {
    console.log("You Already Won!");
  } else if (guessesRemaining == 0) {
    console.log("You Already Lost!");
  } else if (cell.innerHTML == "Hit!") {
    console.log("Try A Different Location!");
  } else if (cell.innerHTML == "Miss!") {
    console.log("Try A Different Location!");
  } else if (guess == location1 || guess == location2 || guess == location3) {
    hits++;
    guessesRemaining--;
    styleCell(cell, "Hit!", "orange", "crimson");
    if (hits == 3) {
      console.log("WIN");
      winGame();
    } else if (guessesRemaining == 0) {
      console.log("LOSE");
      loseGame();
    }
    console.log(`${guessesRemaining} Guesses Remaining.`);
  } else {
    cell.innerHTML = "Miss!"
    guessesRemaining--;
    if (guessesRemaining == 0) {
      console.log("LOSE");
      loseGame();
    }
    console.log(`${guessesRemaining} Guesses Remaining.`);
  }
}

btnPlay.onclick = function(){gameStart()}

cell1.onclick = function(){attackCell(1, cell1)}
cell2.onclick = function(){attackCell(2, cell2)}
cell3.onclick = function(){attackCell(3, cell3)}
cell4.onclick = function(){attackCell(4, cell4)}
cell5.onclick = function(){attackCell(5, cell5)}
cell6.onclick = function(){attackCell(6, cell6)}
