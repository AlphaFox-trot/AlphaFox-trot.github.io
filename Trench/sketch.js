// Trench
// Andrew Bertrand
// Date

class Trooper{
  constructor (type){
    this.type = type;
    this.buffer = 0;
    this.damage = 0;
  }
}
class Enemy{
  constructor(type, direction, lane){
    this.type = type;
    this.direction = direction;
    this.lane = lane;
    this.health = 0;
    this.speed = 0;
  }
}

let encampmentX, encampmentY;
let north, east, west, lane;
let blockN, blockE, blockW;
let menu;
let wave = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  menu = "main";
}

function draw() {
  background(220);
  displayMenu();
}

function displayMenu(){
  if (menu === "main"){
    textAlign(LEFT);
    textSize(32);
    text("welcome player, you are the commander of a special squadron of space marine, your troops have been shot down on a distant planet and are now fighting for their lives waiting for extraction, you are to help them survive until help arrives.", 100, 200, 1500, 200);
    text("use 1 - 6 to select your soldiers, soldiers in the encampment are able to shoot enemies, soldiers in the crashed ship boost the signal helping the extraction team find them, puch space to start, you will get warped to a random planet, each with its own mutators to change up the game.", 100, 400, 1500, 200);
  }
}
