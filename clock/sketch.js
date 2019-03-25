// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
}

function draw() {
  translate(windowWidth/2, windowHeight/2);
  fill(225, 225, 225);
  ellipse(600, 600, 0, 0);
  for (let x = 0; x < 12; x += 1) {
    for (let y = 0; y < 4; y += 1){
      rect(300, 0, 2, 10);
      rotate (6);
    }
  }
}