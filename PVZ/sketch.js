// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [];
let lane1 = [];
let lane2 = [];
let menu = "start";
let type;
let buttonX1, buttonX2, buttonY1, buttonY2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  displayMenu();
  checkMenu();
}

function checkMenu(){
  if (mouseIsPressed && menu === "start" && mouseX >= buttonX1 - 125 && mouseX <= buttonX1 + 125 && mouseY >= buttonY1 - 50 && mouseY <= buttonY1 + 50){
    menu = "game";
    type = "campain";
  }
  else if (mouseIsPressed && menu === "start" && mouseX >= buttonX2 - 125 && mouseX <= buttonX2 + 125 && mouseY >= buttonY2 - 50 && mouseY <= buttonY2 + 50){
    menu = "game";
    type = "endless";
  }
}

function displayMenu(){
  buttonX1 = windowWidth/1.5;
  buttonX2 = windowWidth/3;
  buttonY1 = windowHeight/2;
  buttonY2 = windowHeight/2;
  if (menu === "start"){
    textSize(30);
    fill(10, 200, 10);
    rectMode(CENTER);
    rect(buttonX1, buttonY1, 250, 100);
    rect(buttonX2, buttonY2, 250, 100);
    fill(0);
    textAlign(CENTER);
    text("Campain", buttonX1, buttonY1);
    text("Endless", buttonX2, buttonY2);
    textAlign(LEFT);
  }
}