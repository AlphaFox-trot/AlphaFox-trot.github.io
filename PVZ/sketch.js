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
let level, wave;
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
    level = 1;
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
    textSize(32);
    text("welcome player, you are the warden of colony V, a concentration camp of 'impures' sent to a distant plannet by a cult leader fighting a 'holy war'. As warden it is your job to protect them, you have full access to the defence grid arsinal. Good luck warden", windowWidth/2, 200, 1000, 200);
  }
  if (menu === "game"){
    if (level === 1){
      lane1 = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
      lane2 = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
      grid = [lane1, lane2, lane1, lane2, lane1];
    }
    for (let i = 0; i < grid.length; i++){
      for (let j = 0; j < lane1.length; j++){
        if (grid[i][j] === 0){
          fill(200, 0, 150);
        }
        if (grid[i][j] === 1){
          fill(150, 0, 200);
        }
        rect(j*100 + 400, i*100 + 250, 100, 100);
      }
    }
  }
}
