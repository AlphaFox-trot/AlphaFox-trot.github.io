// Project Title
// Your Name
// Date

function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background(220);
  drawcircles(width/2, 400);
}

function drawcircles(x, radius){
  ellpise(x, height / 2, radius*2, radius*2);

  if (radius > 50){
    drawcircles(x-radius/2, radius/2);
    drawcircles(x+radius/2, radius/2);

  }
}
