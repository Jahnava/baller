// referancing the canvas element variable and creating a variable named ctx to store 2D rendering context.
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// using the ctx variable to create a red square on the canvas between the beginPath and closePath
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

//now creating a circle
//the arc takes six parameters: x & y coordinates of the arcs center, arc radius, start & end angles, direction of drawing (false for clockwise & true for counter-clockwise)
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

//adding stroke for stroke outline
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 225, 0.5)";
ctx.stroke();
ctx.closePath();
