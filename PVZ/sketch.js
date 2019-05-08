// Warden of Colony V
// Andrew Bertrand
// 4/5/2019

class Enemy{
  constructor(x, aList, aColour, aSpeed, aHealth) {
    this.x = x;
    this.y = aList;
    if(this.y === 0){
      this.row = Game.enemyList1;
    }
    else if(this.y === 1){
      this.row = Game.enemyList2;
    }
    else if(this.y === 2){
      this.row = Game.enemyList3;
    }
    else if(this.y === 3){
      this.row =Game.enemyList4;
    }
    else if(this.y === 4){
      this.row = Game.enemyList5;
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
  }

  damage(number) {
    this.health -= number;
  }
}

class Structure {
  constructor(aType, x, y, aGame){
    this.type = aType;
    this.x = x;
    this.row = y;
    this.buffer = 250;
    this.game = aGame;
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
        this.buffer = 250;
        Game.scrap += 10;
      }
      if(this.type === 2){
        this.buffer = 250;
        if (this.list.length !== 0){
          this.list[0].damage(2);
        }
      }
    }
  }
}

class Game{

  constructor(){
    // makes the grid
    this.grid = [];
    this.lane1 = [];
    this.lane2 = [];

    // location of the cursor
    this.cursorX = 0, this.cursorY = 0;

    // list of deployables on the grid
    this.defenceGrid =[];
    this.defenceLane1 = [];
    this.defenceLane2 = [];
    this.defenceLane3 = [];
    this.defenceLane4 = [];
    this.defenceLane5 = [];
    this.selectedTower = 1;
    this.price, this.scrap;

    // list of enemies on the grid
    this.enemyGrid = [];
    this.enemyList1 = [];
    this.enemyList2 = [];
    this.enemyList3 = [];
    this.enemyList4 = [];
    this.enemyList5 = [];
    this.enemyWave = [];
    this.pusher = [];
    this.timer = 0;
    this.buffer = 200;
    this.waveBuffer = 200;
    this.anotherBuffer;
    this.selected;

    // controls the rest of the game, and menu system
    this.menu = "start";
    this.level, this.wave;
    this.type;
    this.buttonX1, this.buttonX2, this.buttonY1, this.buttonY2;
  }

  setup() {
    createCanvas(windowWidth, windowHeight);
    this.anotherBuffer = random(300, 500);
    this.defenceLane1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.defenceLane2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.defenceLane3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.defenceLane4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.defenceLane5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.defenceGrid = [this.defenceLane1, this.defenceLane2, this.defenceLane3, this.defenceLane4, this.defenceLane5];
    this.enemyGrid = [this.enemyList1, this.enemyList2, this.enemyList3, this.enemyList4, this.enemyList5];
    this.buttonX1 = windowWidth/1.5;
    this.buttonX2 = windowWidth/3;
    this.buttonY1 = windowHeight/2;
    this.buttonY2 = windowHeight/2; 
    for(let i = random(19, 30); i > 0; i--){
      this.enemyWave.push(floor(random(1, 4)));
    }
  }

  draw() {
    background(220);
    this.displayMenu();
    this.checkMenu();
    this.cursorX = round(mouseX/100);
    this. cursorY = round(mouseY/100);
    if (this.selectedTower === 1){
      this.price = 20;
    }
    else if (this.selectedTower === 2){
      this.price = 50;
    }
    else if (this.selectedTower === 3){
      this.price = 40;
    }
    else if (this.selectedTower === 4){
      this.price = 40;
    }
    else if (this.selectedTower === 0){
      this.price = 0;
    }
  }

  checkMenu(){
    if (mouseIsPressed && this.menu === "start" && mouseX >= this.buttonX1 - 125 && mouseX <=this. buttonX1 + 125 && mouseY >= this.buttonY1 - 50 && mouseY <= this.buttonY1 + 50){
      this.menu = "game";
      this.type = "campain";
      this.scrap = 30;
    }
    else if (mouseIsPressed && this.menu === "start" && mouseX >= this.buttonX2 - 125 && mouseX <= this.buttonX2 + 125 && mouseY >= this.buttonY2 - 50 && mouseY <= this.buttonY2 + 50){
      this.menu = "game";
      this.type = "endless";
      this.scrap = 50;
    }
  }

  displayMenu(){
    if (this.menu === "start"){
      textSize(30);
      fill(10, 200, 10);
      rectMode(CENTER);
      rect(this.buttonX1, this.buttonY1, 250, 100);
      rect(this.buttonX2, this.buttonY2, 250, 100);
      fill(0);
      textAlign(CENTER);
      text("Campain", this.buttonX1, this.buttonY1);
      text("Endless", this.buttonX2, this.buttonY2);
      textAlign(LEFT);
      textSize(32);
      text("welcome player, you are the warden of colony V, a prison full of 'impures' sent to a distant plannet by a cult leader fighting a 'holy war'. As warden it is your job to protect them, you have full access to the defence grid arsinal. Good luck warden", windowWidth/2, 200, 1000, 200);
      text("press 1 - 4 to select towers, 5 erases the current slot, tower 1 produces scrap, tower 2 shoots enemies, tower 3 blocks enemies, tower 4 damages enemies that stand on it, last untill the waves stop", windowWidth/2, 800, 1500, 200);
    }
    if (this.menu === "game"){
      this.lane1 = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
      this.lane2 = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
      this.grid = [this.lane1, this.lane2, this.lane1, this.lane2, this.lane1];
      fill(50, 100, 50);
      rect(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
      fill(100, 100, 100);
      rect(850, 0, 1000, 500);
      textAlign(CENTER);
      fill(0);
      text("Scrap " + this.scrap, 200 , 100);
      text("Price " + this.price, 200 , 150);
      if (this.selectedTower === 1){
        fill(50);
        rect(200, 250 , 50, 50);
      }
      if (this.selectedTower === 2){
        fill(255, 0, 0);
        rect(200, 250, 75, 25);
      }
      if (this.selectedTower === 3){
        fill(0, 150, 150);
        rect(200, 250, 25, 75);
      }
      if (this.selectedTower === 4){
        fill(150, 150, 0);
        rect(200, 250, 80, 80);
      }
      for(let i = 0; i < this.enemyList1.length; i++){
        this.enemyList1[i].move();
        this.enemyList1[i].display();
      }

      // displayes Grid
      for (let i = 0; i < this.grid.length; i++){
        for (let j = 0; j < this.lane1.length; j++){
          if (this.grid[i][j] === 0){
            fill(200, 0, 150);
          }
          if (this.grid[i][j] === 1){
            fill(150, 0, 200);
          }
          rect(j*100 + 400, i*100 + 300, 100, 100);
        }
      }

      fill(255, 255, 0);
      if (mouseX > 350 && mouseX < 1350 && mouseY > 250 && mouseY < 750){
        rect(this.cursorX*100-45, this.cursorY*100-45, 10, 10);
        rect(this.cursorX*100+45, this.cursorY*100-45, 10, 10);
        rect(this.cursorX*100+45, this.cursorY*100+45, 10, 10);
        rect(this.cursorX*100-45, this.cursorY*100+45, 10, 10);
      } 
      Game.enemyController();

      for (let j = 0; j < this.defenceGrid.length; j++){
        for (let i = 0; i < this.defenceLane1.length; i++){
          if (this.defenceGrid[j][i] !== 0){
            this.defenceGrid[j][i].show();
            this.defenceGrid[j][i].work();
          }
        }
      }
    }
  }

  refresh(){
    for (let i = 0; i < this.defenceGrid.length; i++){
      for (let j = 0; j < this.defenceLane1.length; j++){
        if(this.defenceGrid[i][j] === 1){
          this.scrap += 5;
        }
      }
    }
    this.scrap += 10;
  }

  enemyController(){
    if (this.waveBuffer >= 0){
      this.waveBuffer--;
    }
    else{
      for(let i = 0; i < this.enemyList1.length; i++){
        this.enemyList1[i].move();
        this.enemyList1[i].display();
      }
      for(let i = 0; i < this.enemyList2.length; i++){
        this.enemyList2[i].move();
        this.enemyList2[i].display();
      }
      for(let i = 0; i < this.enemyList3.length; i++){
        this.enemyList3[i].move();
        this.enemyList3[i].display();
      }
      for(let i = 0; i < this.enemyList4.length; i++){
        this.enemyList4[i].move();
        this.enemyList4[i].display();
      }
      for(let i = 0; i < this.enemyList5.length; i++){
        this.enemyList5[i].move();
        this.enemyList5[i].display();
      }
      this.anotherBuffer--;
      if (this.anotherBuffer <= 0){
        this.selected = this.enemyWave.shift();
        let index = floor(random(0, 5));
        if (this.selected === 1){
          this.enemyGrid[index].push(new Enemy(1500, floor(random(0, 5)), "red", 1, 3));
        }
        if (this.selected === 2){
          this.enemyGrid[index].push(new Enemy(1500, floor(random(0, 5)), "blue", 1.5, 2));
        }
        if (this.selected === 3){
          this.enemyGrid[index].push(new Enemy(1500, floor(random(0, 5)), "grey", 0.5, 5));
        }
        this.anotherBuffer = random(100, 300);
      }
    }
  }

  mousePressed(){
    if (mouseX > 350 && mouseX < 1350 && mouseY > 250 && mouseY < 750 &&  this.menu === "game" && this.scrap >= this.price && (this.defenceGrid[this.cursorY-3][this.cursorX-4] === 0 || this.selectedTower === 0)){
      this.defenceGrid[this.cursorY-3][this.cursorX-4] =  new Structure(this.selectedTower, this.cursorX, this.cursorY, this.enemyGrid[this.cursorY-4]);
      if (this.selectedTower !== 5){
        this.scrap = this.scrap - this.price;
      }
    } 
  }

  keyPressed(){
    if (key === "1"){
      this.selectedTower = 1;
    }
    if (key === "2"){
      this.selectedTower = 2;
    }
    if (key === "3"){
      this.selectedTower = 3;
    }
    if (key === "4"){
      this.selectedTower = 4;
    }
    if (key === "5"){
      this.selectedTower = 0;
    }
  }
}

let controller = new Game;
function setup(){
  controller.setup();
}

function draw(){
  controller.draw();
}

