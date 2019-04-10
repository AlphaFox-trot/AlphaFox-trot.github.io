// Warden of Colony V
// Andrew Bertrand
// 4/5/2019

// makes the grid
let grid = [];
let lane1 = [];
let lane2 = [];

// location of the cursor
let cursorX = 0, cursorY = 0;

// list of deployables on the grid
let defenceGrid =[];
let defenceLane1 = [];
let defenceLane2 = [];
let defenceLane3 = [];
let defenceLane4 = [];
let defenceLane5 = [];
let selectedTower = 1;
let price;

// list of enemies on the grid
let enemyGrid = [];
let enemyList = [];
let enemyWave = [];
let timer = 0;
let ineravle = 0;

// controls the rest of the game, and menu system
let menu = "start";
let level, wave;
let type;
let buttonX1, buttonX2, buttonY1, buttonY2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  defenceLane1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  defenceLane2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  defenceLane3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  defenceLane4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  defenceLane5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  defenceGrid = [defenceLane1, defenceLane2, defenceLane3, defenceLane4, defenceLane5];
  buttonX1 = windowWidth/1.5;
  buttonX2 = windowWidth/3;
  buttonY1 = windowHeight/2;
  buttonY2 = windowHeight/2; 
  for(let i = random(19, 30); i > 0; i--){
    enemyWave.push(floor(random(1, 4)));
  }
}

function draw() {
  background(220);
  displayMenu();
  checkMenu();
  enemyController();
  cursorX = round(mouseX/100);
  cursorY = round(mouseY/100);
  if (selectedTower === 1){
    price = 20;
  }
  else if (selectedTower === 2){
    price = 50;
  }
  else if (selectedTower === 3){
    price = 65;
  }
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
    text("welcome player, you are the warden of colony V, a prison full of 'impures' sent to a distant plannet by a cult leader fighting a 'holy war'. As warden it is your job to protect them, you have full access to the defence grid arsinal. Good luck warden", windowWidth/2, 200, 1000, 200);
  }
  if (menu === "game"){
    lane1 = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
    lane2 = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
    grid = [lane1, lane2, lane1, lane2, lane1];
    fill(50, 100, 50);
    rect(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
    fill(100, 100, 100);
    rect(850, 0, 1000, 500);

    // displayes Grid
    for (let i = 0; i < grid.length; i++){
      for (let j = 0; j < lane1.length; j++){
        if (grid[i][j] === 0){
          fill(200, 0, 150);
        }
        if (grid[i][j] === 1){
          fill(150, 0, 200);
        }
        rect(j*100 + 400, i*100 + 300, 100, 100);
      }
    }

    //displayes diffences
    for (let i = 0; i < defenceGrid.length; i++){
      for (let j = 0; j < defenceLane1.length; j++){
        if (defenceGrid[i][j] === 1){
          fill(50);
          rect(j*100 + 400, i*100 + 300, 50, 50);
        }
        if (defenceGrid[i][j] === 2){
          fill(255, 0, 0);
          rect(j*100 + 400, i*100 + 300, 75, 25);
        }
        if (defenceGrid[i][j] === 3){
          fill(0, 150, 150);
          rect(j*100 + 430, i*100 + 300, 25, 75);
        }
      }
    }
    fill(255, 255, 0);
    if (mouseX > 350 && mouseX < 1350 && mouseY > 250 && mouseY < 750){
      rect(cursorX*100-45, cursorY*100-45, 10, 10);
      rect(cursorX*100+45, cursorY*100-45, 10, 10);
      rect(cursorX*100+45, cursorY*100+45, 10, 10);
      rect(cursorX*100-45, cursorY*100+45, 10, 10);
    } 
  }
}

function enemyController(){
  
}

function mousePressed(){
  if (mouseX > 350 && mouseX < 1350 && mouseY > 250 && mouseY < 750 &&  menu === "game" && (defenceGrid[cursorY-3][cursorX-4] === 0 || selectedTower === 0)){
    defenceGrid[cursorY-3][cursorX-4] = selectedTower;
  } 
}

function keyPressed(){
  if (key === "1"){
    selectedTower = 1;
  }
  if (key === "2"){
    selectedTower = 2;
  }
  if (key === "3"){
    selectedTower = 3;
  }
  if (key === "4"){
    selectedTower = 0;
  }
}

