var attackScript = document.createElement("script"); // this links the attack script to this one.
attackScript.src = "attack.js";
document.head.appendChild(attackScript);

var txtGuesses = document.getElementById("txtGuesses");
var txtHits = document.getElementById("txtHits");
var txtOutput = document.getElementById("txtOutput");
var btnRestart = document.getElementById("btnRestart");

var guesses = 20;
var hits = 0;
var gameFinished = false;

var arrCells = [];
for (var i = 0; i < 64; i++) { // generates cells
  arrCells[i] = i + 1
}

var ship1 = {
  assignLoc: function() {
    this.loc1 = generateHorizPos();
    this.loc2 = this.loc1 + 1;
  }
};

var ship2 = {
  assignLoc: function() {
    this.loc1 = arrCells[Math.floor(Math.random() * 56)];
    this.loc2 = this.loc1 + 8;
    adjustPos();
  }
};

function generateHorizPos() {
  var a = Math.floor(Math.random() * 7) + 1; // generates a postion for horizontal ships to ensure they dont exceed cell limit
  var b = a + 8;
  var c = b + 8;
  var d = c + 8;
  var e = d + 8;
  var f = e + 8;
  var g = f + 8;
  var h = g + 8;
  var arr = [a, b, c, d, e, f, g, h];
  return arr[Math.floor(Math.random() * 8)];
}

function adjustPos() {
  if (ship2.loc1 == ship1.loc1 || ship2.loc1 == ship1.loc2 || ship2.loc2 == ship1.loc1 || ship2.loc2 == ship1.loc2) { // adjust the postion of ships if they overlap
    ship2.loc1 = ship1.loc2 + 1;
    ship2.loc2 = ship2.loc1 + 8;
    console.log("moved");
    if (ship2.loc1 > 54) {
      ship2.loc1 = ship1.loc1 - 9;
      ship2.loc2 = ship2.loc1 + 8;
    }
  }
}

function displayShips(shipLoc) { // display ships for DEBUGGING purposes
  var ship1cell = shipLoc;
  if (ship1cell < 9) {
    ship1cell = "a" + ship1cell;
  } else if (ship1cell < 17) {
    ship1cell = "b" + (ship1cell - 8);
  } else if (ship1cell < 25) {
    ship1cell = "c" + (ship1cell - 16);
  } else if (ship1cell < 33) {
    ship1cell = "d" + (ship1cell - 24);
  } else if (ship1cell < 41) {
    ship1cell = "e" + (ship1cell - 32);
  } else if (ship1cell < 49) {
    ship1cell = "f" + (ship1cell - 40);
  } else if (ship1cell < 57) {
    ship1cell = "g" + (ship1cell - 48);
  } else if (ship1cell <= 64) {
    ship1cell = "h" + (ship1cell - 56);
  }
  document.getElementById(ship1cell.toString()).classList.add("ship");
}

function restartGame() {
  guesses = 20;
  hits = 0;
  gameFinished = false;
  txtOutput.innerHTML = "...";
  for (var i = 1; i <= arrCells.length; i++) {
    var cell;
    if (i < 9) {
      cell = "a" + i;
    } else if (i < 17) {
      cell = "b" + (i - 8);
    } else if (i < 25) {
      cell = "c" + (i - 16);
    } else if (i < 33) {
      cell = "d" + (i - 24);
    } else if (i < 41) {
      cell = "e" + (i - 32);
    } else if (i < 49) {
      cell = "f" + (i - 40);
    } else if (i < 57) {
      cell = "g" + (i - 48);
    } else if (i <= 64) {
      cell = "h" + (i - 56);
    }
    document.getElementById(cell.toString()).classList.remove("miss");
    document.getElementById(cell.toString()).classList.remove("hit");
    document.getElementById(cell.toString()).innerHTML = cell;
    txtGuesses.innerHTML = "20";
    txtHits.innerHTML = "0"
    ship1.assignLoc();
    ship2.assignLoc();
  }
}

function checkHit(cell, id) {
  if (gameFinished) {
    console.log("The game is already over");
    return;
  };

  if (id.innerHTML === "Hit" || id.innerHTML === "Miss"){
    console.log("You already attacked there!!!");
  } else {
    if (cell == ship1.loc1 || cell == ship1.loc2 || cell == ship2.loc1 || cell == ship2.loc2) {
      console.log("hit");
      id.classList.add("hit");
      id.innerHTML = "Hit";
      hits++
      guesses--
      txtOutput.innerHTML = "Hit!";
    } else {
      console.log("Attacked cell " + cell + " and missed");
      id.classList.add("miss");
      id.innerHTML = "Miss";
      guesses--
      txtOutput.innerHTML = "Miss!";
    }
    txtGuesses.innerHTML = guesses;
    txtHits.innerHTML = hits;
  }

  if (hits === 4) {
    txtOutput.innerHTML = "You Win!"
    gameFinished = true;
  } else if (guesses === 0) {
    txtOutput.innerHTML = "You Lose!";
    gameFinished = true;
  }
}

ship1.assignLoc();
ship2.assignLoc();

// displayShips(ship1.loc1);
// displayShips(ship1.loc2);
// displayShips(ship2.loc1);
// displayShips(ship2.loc2);

console.log(ship1.loc1, ship1.loc2);
console.log(ship2.loc1, ship2.loc2);

btnRestart.onclick = function() {
  restartGame();
};
