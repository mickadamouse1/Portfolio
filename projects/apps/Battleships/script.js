var btnPlay = document.getElementById("btnPlay");
var pressPlayWindow = document.getElementById("pressPlayWindow");
var pressPlayImg = document.getElementById("pressPlayImg");
var preFireText = document.getElementById("preFireText");
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

function setDisplay (element, value) {
  element.style.display = value;
}

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
    setDisplay(pressPlayWindow, "none");
    setDisplay(pressPlayImg, "none");
    setDisplay(preFireText, "block");
    setDisplay(pressPlayImg, "block");
    for (var i = 0; i < cells.length; i++) {
      setHoverColour(cells[i], "tomato", "#333");
    }
  }
}

function winGame() {
  gameStarted = false;
  btnPlay.innerHTML = "Restart";
  for (i = 0; i < cells.length; i++) {
    styleCell(cells[i], "Win!","whitesmoke", "steelblue");
    setHoverColour(cells[i], "steelblue", "steelblue");
  }
}

function loseGame() {
  gameStarted = false;
  btnPlay.innerHTML = "Restart";
  for (var i = 0; i < cells.length; i++) {
    styleCell(cells[i], "Lose!","whitesmoke", "crimson");
    setHoverColour(cells[i], "crimson", "crimson");
  }
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
