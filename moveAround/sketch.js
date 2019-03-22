// Pipe Screen
// Andrew Bertrand
// Feb 15, 2019
// use WASD to move around
// q and e to change your size
// use r g b y p and t to change your colour
// use z and x to change the background
// use c and v to change to white or black
// use the mouse button to randomise your colour and place a square

let x, y;
let direction;
let size;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 200;
  y = 200;
  size = 50;
  background(225);
  direction = 1;
  fill(0, 0, 0);
}

function draw() {
  ellipse(x, y, size);
  if  (keyIsPressed){
    if (key === "w"){
      if (y >= 0 + size/2){
        y = y - 5;
      }
    }
    if (key === "a"){
      if (x >= 0 + size/2){
        x = x - 5;
      }
    }
    if (key === "s"){
      if (y <= windowHeight - size/2){
        y = y + 5;
      }
    }
    if (key === "d"){
      if (x <= windowWidth - size/2){
        x = x + 5;
      }
    }
    if (key === "q"){
      size--;
    }
    if (key === "e"){
      size++;
    }
    if (key === "r"){
      fill(225, 0, 0);
    }
    if (key === "g"){
      fill(0, 225, 0);
    }
    if (key === "b"){
      fill(0, 0, 225);
    }
    if (key === "p"){
      fill(225, 0, 225);
    }
    if (key === "t"){
      fill(0, 225, 225);
    }
    if (key === "y"){
      fill(225, 225, 0);
    }
    if (key === "z"){
      fill(225, 225, 225);
    }
    if (key === "x"){
      fill(0, 0, 0);
    }
    if (key === "c"){
      background(0);
    }
    if (key === "v"){
      background(300);
    }
  }
}

function mousePressed(){
  fill(random(0, 225), random(0, 225), random(0, 225));
  rect(x - size / 2, y - size / 2, size, size);
}


