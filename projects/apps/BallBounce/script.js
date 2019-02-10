var canvas = document.getElementById("myCanvas"); // Reference to canvas
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 40;

var dx = -2;
var dy = -2;

var ballRadius = 30;

function drawBall() {
  ctx.beginPath(); // Beginning of path
  ctx.arc(x, y, ballRadius, 0, Math.PI*2); // Creates a rectangle (Y, X, w, h)
  ctx.fillStyle = "#333"; // Colour of the rectangle
  ctx.fill();
  ctx.closePath(); // End of path
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;

  if(y + dy < ballRadius || y + dy > (canvas.height - ballRadius)){
    dy = -dy;
  }

  if(x + dx < ballRadius || x + dx > (canvas.width - ballRadius)){
    dx = -dx;
  }
}
setInterval(draw, 10);
