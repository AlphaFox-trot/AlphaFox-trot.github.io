// Creeper
// Andrew
// Feb 28, 2019

let x, y;
let size;
let movement;
let hive;
//let location;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  x = windowWidth / 2;
  y = windowHeight / 2;
  size = 30;
  hive = 0;
  //location = [x, y];
}

function draw() {
  fill (200, 20, 225);
  if (movement >= 9){
    fill (0, 100, 50);
    ellipse(x, y, size + 5);
  }
  ellipse(x, y, size);
  movement = random(0, 10);

  if (movement <= 4){
    x = x - size - 2;
  }
  else if (movement <= 9){
    y = y - size - 2;
  }
  else if (movement >= 9){
    fill (0, 100, 50);
    ellipse(x, y, size + 5);
  }

  if (size >= 5){
    size -= 0.3;
  }
  if (hive === 10){
    fill(225, 0, 0);
    ellipse(windowWidth / 2, windowHeight / 2, 60);
  }
  if (hive === 25){
    fill (100, 0, 0);
    ellipse(windowWidth / 2, windowHeight / 2, 59, 20);
  }
  if (hive === 50){
    fill (150, 0, 50);
    ellipse(windowWidth / 2, windowHeight / 2, 20, 20);
  }
  hive++;
}
