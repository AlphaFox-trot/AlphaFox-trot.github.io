// Interactive Scene
// Andrew Bertrand
// Feb 14, 2019

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  ellipse(mouseX, mouseY, 50, 50);
  ellipse(pmouseX, pmouseY, 50, 50);
}

