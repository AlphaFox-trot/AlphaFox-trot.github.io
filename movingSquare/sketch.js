// Project Title
// Your Name
// Date

let squareSize;
let x, y;
let speed;
let state;

function setup() {
  createCanvas(windowWidth, windowHeight);
  speed = 5;
  state = 1;
  x = 0;
  y = 0;
  squareSize = 50;
}

function draw() {
  background(220);
  determineState();
  moveAccordingToState();
  displaySquare();
}

function displaySquare(){
  fill (0);
  rect(x, y, squareSize, squareSize);
}

function determineState(){
  if (state === 1 && x >= width - squareSize){
    state = 2;
    x = width - squareSize;
  }
  else if (state === 2 && y >= height - squareSize){
    state = 3;
    y = height - squareSize;
  }
  else if (state === 3 && x <= 0){
    state = 4;
    x = 0;
  }
  else if (state === 4 && y <= 0){
    state = 1;
    y = 0;
  }
}

function moveAccordingToState(){
  if (state === 1){
    x += speed;
  }
  else if (state === 2){
    y += speed;
  }
  else if (state === 3){
    x -= speed;
  }
  else if (state === 4){
    y -= speed;
  }
}
