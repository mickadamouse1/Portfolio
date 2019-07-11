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

var btnPlay = document.getElementById("btnPlay");

var pressPlayText = document.getElementById("pressPlayWindow");
var preFireText = document.getElementById("preFireText");
var missWindowText = document.getElementById("missWindowText");
var hitWindowText = document.getElementById("hitWindowText");
var loseWindowText = document.getElementById("loseWindowText");
var winWindowText = document.getElementById("winWindowText");
var alreadyPlayingText = document.getElementById("alreadyPlayingText");

var pressPlayImg = document.getElementById("preFireImg");
var preFireImg = document.getElementById("preFireImg");
var postFireImg = document.getElementById("postFireImg");
var winWindowImg = document.getElementById("winImg");
var loseWindowImg = document.getElementById("loseImg");

var guessesRemainingText = document.getElementById("guessesRemainingText");
var hitsText = document.getElementById("hitsText");


function hideWindowItems() {
  pressPlayText.style.display = "none";
  preFireText.style.display = "none";
  missWindowText.style.display = "none";
  hitWindowText.style.display = "none";
  winWindowText.style.display = "none";
  loseWindowText.style.display = "none";
  alreadyPlayingText.style.display = "none";
  pressPlayImg.style.display = "none";
  preFireImg.style.display = "none";
  postFireImg.style.display = "none";
  winWindowImg.style.display = "none";
  loseWindowImg.style.display = "none";
}

function updateScoreText() {
  hitsText.innerHTML = hits;
  guessesRemainingText.innerHTML = guessesRemaining;
}

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
    hideWindowItems();
    setDisplay(alreadyPlayingText, "block");
    setDisplay(preFireImg, "block");
  } else {
    btnPlay.innerHTML = "Play";
    gameStarted = true;
    location1 = Math.floor(Math.random() * (5 - 1) + 1);
    location2 = location1 + 1;
    location3 = location2 + 1;
    console.log(`Locations: ${location1}, ${location2}, ${location3}.`)
    guess = 0;
    guessesRemaining = 3
    hits = 0;
    resetCell();
    hideWindowItems();
    setDisplay(preFireText, "block");
    setDisplay(preFireImg, "flex");
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
  hideWindowItems();
  setDisplay(winWindowImg, "flex");
  setDisplay(winWindowText, "block");
}

function loseGame() {
  gameStarted = false;
  btnPlay.innerHTML = "Restart";
  for (var i = 0; i < cells.length; i++) {
    styleCell(cells[i], "Lose!","whitesmoke", "crimson");
    setHoverColour(cells[i], "crimson", "crimson");
  }
  hideWindowItems();
  setDisplay(loseWindowImg, "flex");
  setDisplay(loseWindowText, "block");
}

function attackCell(cellLocation, cell) {
  guess = cellLocation;
  if (gameStarted == false) {
  } else if (hits == 3) {
  } else if (guessesRemaining == 0) {
  } else if (cell.innerHTML == "Hit!") {
  } else if (cell.innerHTML == "Miss!") {
  } else if (guess == location1 || guess == location2 || guess == location3) {
    hits++;
    guessesRemaining--;
    updateScoreText();
    styleCell(cell, "Hit!", "white", "crimson");
    setHoverColour(cell, "crimson", "crimson");
    hideWindowItems();
    setDisplay(hitWindowText, "block");
    setDisplay(postFireImg, "flex");
    if (hits == 3) {
      winGame();
    } else if (guessesRemaining == 0) {
      loseGame();
    }
  } else {
    guessesRemaining--;
    hideWindowItems();
    setDisplay(missWindowText, "block");
    setDisplay(postFireImg, "flex");
    styleCell(cell, "Miss!", "white", "#00171F");
    setHoverColour(cell, "#00171F", "#00171F");
    updateScoreText();
    if (guessesRemaining == 0) {
      loseGame();
    }
  }
}

btnPlay.onclick = function(){gameStart()}

cell1.onclick = function(){attackCell(1, cell1)}
cell2.onclick = function(){attackCell(2, cell2)}
cell3.onclick = function(){attackCell(3, cell3)}
cell4.onclick = function(){attackCell(4, cell4)}
cell5.onclick = function(){attackCell(5, cell5)}
cell6.onclick = function(){attackCell(6, cell6)}
