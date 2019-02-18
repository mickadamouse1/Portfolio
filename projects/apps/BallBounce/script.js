var canvas = document.getElementById("myCanvas"); // Reference to canvas
var ctx = canvas.getContext("2d");
var restartCounter = document.getElementById("restartCounter"); // the count down text
var restartButton = document.getElementById("button"); // the restart button
var restartCounterCount = 3;
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;


document.addEventListener("keydown", keyDownHandler, false); //will listen for when keys have stopped being pressed
document.addEventListener("keyup", keyUpHandler, false); // will listen for when keys are being pressed



function restartPause(){
  restartButton.disabled = "true"; // disables the restart button
  clearInterval(interval);         // clears the interval (pause game)
  setTimeout(restart, 3000);       // runs the 'restart' function after 3 seconds
  restartCounter.style.display = "block";  // sets the display of the counter to block
  restartCounterLoop();            // runs the restart counter loop (count down)
}

restartButton.onclick = function() {restartPause()};

function restartCounterLoop(){
  restartCounter.innerHTML = restartCounterCount;         // will display 3 as counter before waiting a second
  setTimeout(function (){                   // will wait one second before running this function
    if (restartCounterCount >= 2){
      restartCounterCount--;
      restartCounterLoop();
    } else {
      restartCounter.style.display = "none";
    }
  }, 1000)
}

function restart() {
  document.location.reload();
  restartButton.disabled = "false";
}

function keyDownHandler(e){
  if(e.key == "Right" || e.key == "ArrowRight"){
    rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft"){
    leftPressed = true;
  }
}

function keyUpHandler(e){
  if(e.key == "Right" || e.key == "ArrowRight"){
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft"){
    leftPressed = false;
  }
}

function drawBall() {
  ctx.beginPath(); // Beginning of path
  ctx.arc(x, y, ballRadius, 0, Math.PI*2); // Creates a rectangle (Y, X, w, h)
  ctx.fillStyle = "#333"; // Colour of the rectangle
  ctx.fill(); // calls the function to fill the object with the above stated colour
  ctx.closePath(); // End of path
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#333";
    ctx.fill();
    ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();

  x += dx;
  y += dy;

  if(y + dy < ballRadius){
    dy = -dy;
  } else if (y + dy > (canvas.height - ballRadius)) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      alert('gg');
      document.location.reload();
      clearInterval(interval);
    }
  }

  if(x + dx < ballRadius || x + dx > (canvas.width - ballRadius)){
    dx = -dx;
  }

  if(rightPressed && paddleX < canvas.width-paddleWidth){
    paddleX += 3;
  } else if(leftPressed && paddleX > 0){
    paddleX -= 3;
  }
}

var interval = setInterval(draw, 10);
