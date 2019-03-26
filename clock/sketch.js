// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let clockSize;

function setup() {
  angleMode(DEGREES);
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  translate(windowWidth/2, windowHeight/2);
  clockSize = 600;
  generateClock();
  generateArms();
}

function generateClock(){
  fill(225, 225, 225);
  ellipse(0, 0, clockSize, clockSize);
  fill(0, 0, 0);
  ellipse(0, 0, 3, 3);
  rectMode(CENTER);
  for (let x = 0; x < 12; x += 1) {
    rect(245, 0, 75, 5);
    rotate (6);
    for (let y = 0; y < 4; y += 1){
      rect(250, 0, 50, 1);
      rotate (6);
    }
  }
}

function generateArms(){
  push();
  
  pop();
}