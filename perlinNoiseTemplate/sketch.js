// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let time;
let rectWidth;
let rectList = [];
let numRects;

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
  for (let i = 0; i < numRects; i++){
    rect(rectList[i].x, rectList[i].y, rectList[i].width, rectList[i].height);
  }
  rect(rect.x, rect.y, rect.width, rect.height);

  rectList.shift();

  let rectHeight = noise(time) * height;
  let myRect = {
    height: rectHeight,
    width: rectWidth,
    x: width - rectWidth,
    y: height - rectHeight,
  };
  rectList.push(myRect);

  time += 0.01;
}

function generateTerrain(){
  for(let i = 0; i < numRects; i++){
    let rectHeight = noise(time) * height;
    let myRect = {
      height: rectHeight,
      width: rectWidth,
      x: i * rectWidth,
      y: height - rectHeight,
    };
    rectList.push(myRect);
    time += 0.01;
  }
}
