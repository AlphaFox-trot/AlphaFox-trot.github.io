// Warden of Colony V
// Andrew Bertrand
// 4/5/2019

class Enemy{
  constructor(x, aList, aColour, aSpeed, aHealth) {
    this.x = x;
    this.y = aList;
    if(this.y === 0){
      this.row = enemyList1;
    }
    else if(this.y === 1){
      this.row = enemyList2;
    }
    else if(this.y === 2){
      this.row = enemyList3;
    }
    else if(this.y === 3){
      this.row = enemyList4;
    }
    else if(this.y === 4){
      this.row = enemyList5;
    }
    this.color = aColour;
    this.speed = aSpeed; 
    this.health = aHealth;
  }
  display(){
    fill(this.color);
    ellipse(this.x, this.y*100 + 300, 40, 40);
  }
  move() {
    this.x -= this.speed;
    if(this.y[round(this.X/100) - 4] !== 0){
      this.y[round(this.X/100) - 4] = 0;
    }
  }

  attack(){

  }

  damage(number) {
    this.health -= number;
    if(this.health <= 0){
      this.list.shift[0];
    }
  }
}

class Structure {
  constructor(aType, x, y, aList){
    this.type = aType;
    this.x = x;
    this.row = y;
    this.buffer = 500;
    this.buffer = 250;
    this.list = aList;
  }

  show(){
    if (this.type === 1){
      fill(50);
      rect(this.x*100, this.row*100, 50, 50);
    }
    if (this.type === 2){
      fill(255, 0, 0);
      rect(this.x*100, this.row*100, 75, 25);
    }
    if (this.type === 3){
      fill(0, 150, 150);
      rect(this.x*100, this.row*100, 25, 75);
    }
    if (this.type === 4){
      fill(150, 150, 0);
      rect(this.x*100, this.row*100, 80, 80);
    }
  }
  work(){
    if(this.buffer >= 0){
      this.buffer--;
    }
    else{
      if(this.type === 1){
        this.buffer = 500;
        this.buffer = 250;
        scrap += 10;
      }
      if(this.type === 2){
        this.buffer = 250;
        this.list[0].damage(2);
      }
    }
  }
}
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
let price, scrap;
// list of enemies on the grid
let enemyGrid = [];
let enemyList1 = [];
let enemyList2 = [];
let enemyList3 = [];
let enemyList4 = [];
let enemyList5 = [];
let enemyWave = [];
let timer = 0;
let buffer = 200;
let waveBuffer = 200;
let anotherBuffer;
let selected;
// controls the rest of the game, and menu system
let menu = "start";
let level, wave;
let type;
let buttonX1, buttonX2, buttonY1, buttonY2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  anotherBuffer = random(200, 500);
  anotherBuffer = random(300, 500);
  defenceLane1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  defenceLane2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  defenceLane3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  defenceLane4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  defenceLane5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  defenceGrid = [defenceLane1, defenceLane2, defenceLane3, defenceLane4, defenceLane5];
  enemyGrid = [enemyList1, enemyList2, enemyList3, enemyList4, enemyList5];
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
  cursorX = round(mouseX/100);
  cursorY = round(mouseY/100);
  if (selectedTower === 1){
    price = 20;
  }
  else if (selectedTower === 2){
    price = 50;
  }
  else if (selectedTower === 3){
    price = 40;
  }
  else if (selectedTower === 4){
    price = 40;
  }
  else if (selectedTower === 0){
    price = 0;
  }
}
function checkMenu(){
  if (mouseIsPressed && menu === "start" && mouseX >= buttonX1 - 125 && mouseX <= buttonX1 + 125 && mouseY >= buttonY1 - 50 && mouseY <= buttonY1 + 50){
    menu = "game";
    type = "campain";
    scrap = 30;
  }
  else if (mouseIsPressed && menu === "start" && mouseX >= buttonX2 - 125 && mouseX <= buttonX2 + 125 && mouseY >= buttonY2 - 50 && mouseY <= buttonY2 + 50){
    menu = "game";
    type = "endless";
    scrap = 50;
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
    text("press 1 - 4 to select towers, 5 erases the current slot, tower 1 produces scrap, tower 2 shoots enemies, tower 3 blocks enemies, tower 4 damages enemies that stand on it, last untill the waves stop", windowWidth/2, 800, 1500, 200);
  }
  if (menu === "game"){
    lane1 = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
    lane2 = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
    grid = [lane1, lane2, lane1, lane2, lane1];
    fill(50, 100, 50);
    rect(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
    fill(100, 100, 100);
    rect(850, 0, 1000, 500);
    textAlign(CENTER);
    fill(0);
    text("Scrap " + scrap, 200 , 100);
    text("Price " + price, 200 , 150);
    if (selectedTower === 1){
      fill(50);
      rect(200, 250 , 50, 50);
    }
    if (selectedTower === 2){
      fill(255, 0, 0);
      rect(200, 250, 75, 25);
    }
    if (selectedTower === 3){
      fill(0, 150, 150);
      rect(200, 250, 25, 75);
    }
    if (selectedTower === 4){
      fill(150, 150, 0);
      rect(200, 250, 80, 80);
    }
    for(let i = 0; i < enemyList1.length; i++){
      enemyList1[i].move();
      enemyList1[i].display();
    }
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
    fill(255, 255, 0);
    if (mouseX > 350 && mouseX < 1350 && mouseY > 250 && mouseY < 750){
      rect(cursorX*100-45, cursorY*100-45, 10, 10);
      rect(cursorX*100+45, cursorY*100-45, 10, 10);
      rect(cursorX*100+45, cursorY*100+45, 10, 10);
      rect(cursorX*100-45, cursorY*100+45, 10, 10);
    } 
    enemyController();
    for (let j = 0; j < defenceGrid.length; j++){
      for (let i = 0; i < defenceLane1.length; i++){
        if (defenceGrid[j][i] !== 0){
          defenceGrid[j][i].show();
          defenceGrid[j][i].work();
        }
      }
    }
  }
}
function refresh(){
  for (let i = 0; i < defenceGrid.length; i++){
    for (let j = 0; j < defenceLane1.length; j++){
      if(defenceGrid[i][j] === 1){
        scrap += 5;
      }
    }
  }
  scrap += 10;
}
function enemyController(){
  if (waveBuffer >= 0){
    waveBuffer--;
  }
  else{
    for(let i = 0; i < enemyList1.length; i++){
      enemyList1[i].move();
      enemyList1[i].display();
    }
    for(let i = 0; i < enemyList2.length; i++){
      enemyList2[i].move();
      enemyList2[i].display();
    }
    for(let i = 0; i < enemyList3.length; i++){
      enemyList3[i].move();
      enemyList3[i].display();
    }
    for(let i = 0; i < enemyList4.length; i++){
      enemyList4[i].move();
      enemyList4[i].display();
    }
    for(let i = 0; i < enemyList5.length; i++){
      enemyList5[i].move();
      enemyList5[i].display();
    }
    anotherBuffer--;
    if (anotherBuffer <= 0){
      selected = enemyWave.shift();
      if (selected === 1){
        enemyGrid[random(0, 6)].push(new Enemy(1500, floor(random(0, 5)), "red", 1, 3));
      }
      if (selected === 2){
        enemyGrid[random(0, 6)].push(new Enemy(1500, floor(random(0, 5)), "blue", 1.5, 2));
      }
      if (selected === 3){
        enemyGrid[random(0, 6)].push(new Enemy(1500, floor(random(0, 5)), "grey", 0.5, 5));
      }
      anotherBuffer = random(100, 300);
    }
  }
}

function mousePressed(){
  if (mouseX > 350 && mouseX < 1350 && mouseY > 250 && mouseY < 750 &&  menu === "game" && scrap >= price && (defenceGrid[cursorY-3][cursorX-4] === 0 || selectedTower === 0)){
    defenceGrid[cursorY-3][cursorX-4] =  new Structure(selectedTower, cursorX, cursorY, defenceGrid[cursorY-4]);
    defenceGrid[cursorY-3][cursorX-4] =  new Structure(selectedTower, cursorX, cursorY, enemyGrid[cursorY-4]);
    if (selectedTower !== 5){
      scrap = scrap - price;
    }
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
    selectedTower = 4;
  }
  if (key === "5"){
    selectedTower = 0;
  }
}

