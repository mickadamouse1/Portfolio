var btnPlay = document.getElementById("btnPlay");
var cells = [cell1, cell2, cell3, cell4, cell5, cell6];
cells[0] = document.getElementById("cell1");
cells[1] = document.getElementById("cell2");
cells[2] = document.getElementById("cell3");
cells[3] = document.getElementById("cell4");
cells[4] = document.getElementById("cell5");
cells[5] = document.getElementById("cell6");



var gameStarted = false;
var location1;
var location2;
var location3;
var guess;
var guessesRemaining = 3;
var hits = 0;

function setHoverColour(cell, hoverColour, hoverOutColour) {
  cell.onmouseover = function() {
    this.style.backgroundColor = hoverColour;
  }
  cell.onmouseout = function() {
    this.style.backgroundColor = hoverOutColour;
  }
}

function resetCell() {
  for (var i = 0; i < 6; i++){
    cells[i].classList.remove("hit");
    cells[i].style.color = "wheat";
    cells[i].style.backgroundColor = "#333"
    cells[i].innerHTML = [i + 1];
  }
}

function styleCell(cell, text, color, backgroundColor) {
  cell.innerHTML = text;
  cell.style.color = color;
  cell.style.backgroundColor = backgroundColor;
}

function gameStart() {
  if (gameStarted == true) {
    console.log("Finish the current game!");
  } else {
    btnPlay.innerHTML = "Play";
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
    var cell;
    var text;
    resetCell();
    setHoverColour(cell1, "tomato", "#333");
    setHoverColour(cell2, "tomato", "#333");
    setHoverColour(cell3, "tomato", "#333");
    setHoverColour(cell4, "tomato", "#333");
    setHoverColour(cell5, "tomato", "#333");
    setHoverColour(cell6, "tomato", "#333");
  }
}

function winGame() {
  gameStarted = false;
  btnPlay.innerHTML = "Restart";
  styleCell(cell1, "Win!","whitesmoke", "steelblue");
  styleCell(cell2, "Win!","whitesmoke", "steelblue");
  styleCell(cell3, "Win!","whitesmoke", "steelblue");
  styleCell(cell4, "Win!","whitesmoke", "steelblue");
  styleCell(cell5, "Win!","whitesmoke", "steelblue");
  styleCell(cell6, "Win!","whitesmoke", "steelblue");
  setHoverColour(cell1, "steelblue", "steelblue");
  setHoverColour(cell2, "steelblue", "steelblue");
  setHoverColour(cell3, "steelblue", "steelblue");
  setHoverColour(cell4, "steelblue", "steelblue");
  setHoverColour(cell5, "steelblue", "steelblue");
  setHoverColour(cell6, "steelblue", "steelblue");
}

function loseGame() {
  gameStarted = false;
  btnPlay.innerHTML = "Restart";
  styleCell(cell1, "Lose!","whitesmoke", "crimson");
  styleCell(cell2, "Lose!","whitesmoke", "crimson");
  styleCell(cell3, "Lose!","whitesmoke", "crimson");
  styleCell(cell4, "Lose!","whitesmoke", "crimson");
  styleCell(cell5, "Lose!","whitesmoke", "crimson");
  styleCell(cell6, "Lose!","whitesmoke", "crimson");
  setHoverColour(cell1, "crimson", "crimson");
  setHoverColour(cell2, "crimson", "crimson");
  setHoverColour(cell3, "crimson", "crimson");
  setHoverColour(cell4, "crimson", "crimson");
  setHoverColour(cell5, "crimson", "crimson");
  setHoverColour(cell6, "crimson", "crimson");
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
    setHoverColour(cell, "crimson", "crimson");
    hits++;
    guessesRemaining--;
    console.log(`${guessesRemaining} Guesses Remaining.`);
    styleCell(cell, "Hit!", "white", "crimson");
    if (hits == 3) {
      console.log("WIN");
      winGame();
    } else if (guessesRemaining == 0) {
      console.log("LOSE");
      loseGame();
    }
  } else {
    styleCell(cell, "Miss!", "white", "#00171F");
    setHoverColour(cell, "#00171F", "#00171F");
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
