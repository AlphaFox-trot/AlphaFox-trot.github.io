// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let time;
let rectWidth;
let rects = [];
let numRects = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numRects = width;
  time = 0;
  rectWidth = width / numRects;
  generateTerrain();
}

function draw() {
  background(220);
  fill (0);
  for (let i = 0; i < rects; i++){
    rect(rects[i].x), rect(rects[i].x), rect(rects[i].width), rect(rects[i].height);
  }
  rect(rect.x, rect.y, rect.width, rect.height);
}

function generateTerrain(){
  for(let i = 0; i < numRects; i++){
    let rectHeight = noise(time) * height;
    let myRect = {
      height: rectHeight,
      width: rectWidth,
      x: 0,
      y: height - rectHeight,
    };
    rects.push(myRect);
    time += 0.01;
  }
}
