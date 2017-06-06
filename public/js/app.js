
// referancing the canvas element variable and creating a variable named ctx to store 2D rendering context.
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//defining the starting point for the ball
var x = canvas.width/2;
var y= canvas.height-30;
var dx = 2;
var dy = -2;
//holds radius of circle
var ballRadius = 10;

function drawBall() {
  //now creating a circle
  //the arc takes six parameters: x & y coordinates of the arcs center, arc radius, start & end angles, direction of drawing (false for clockwise & true for counter-clockwise)
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  drawBall();
  //setting wall boundaries for ball to bounce off of
  //top wall
  if(y + dy < 0) {
    dy = -dy;
  }

  //bottom wall
  if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }
  //left and right walls
  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  
  x += dx;
  y += dy;
}
//set interval creates a loop that will be called every 10 millaseconds
setInterval(draw,10);








// using the ctx variable to create a red square on the canvas between the beginPath and closePath
// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "red";
// ctx.fill();
// ctx.closePath();

//adding stroke for stroke outline
// ctx.beginPath();
// ctx.rect(160, 15, 200, 40);
// ctx.strokeStyle = "rgba(0, 0, 225, 0.5)";
// ctx.stroke();
// ctx.closePath();
