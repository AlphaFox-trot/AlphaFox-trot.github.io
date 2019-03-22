// Idle TD
// Andrew
// 3 8, 2019

let view;
let timer, duration;
let mine, forest, farm, quarry;
let ore, wood, wheat, stone;
let rectX, rectY, rectWidth, rectHeight;

function setup() {
  createCanvas(600, 600);
  view = "menu";
  mine = 0;
  forest = 1;
  farm = 1;
  quarry = 0;
  ore = 0;
  wood = 0;
  wheat = 0;
  stone = 0;
  rectX = 300;
  rectY = 500;
  rectWidth = 400;
  rectHeight = 150;
  timer = 0;
  duration = 500;
}

function draw() {
  background(220);
  if (mouseIsPressed && view === "menu" && mouseX >= rectX - rectWidth / 2 && mouseX <= rectX + rectWidth / 2 && mouseY >= rectY - rectHeight / 2 && mouseY <= rectY + rectHeight / 2){
    view = "field";
    rectWidth = 150;
    rectHeight = 150;
  }
  if (mouseIsPressed && view !== "menu" && mouseX >= rectX - rectWidth / 2 && mouseX <= rectX + rectWidth / 2 && mouseY >= rectY - rectHeight / 2 && mouseY <= rectY + rectHeight / 2){
    if (view === "castle"){
      view = "field";
    }
    if (view === "field"){
      view = "castle";
    }
  }
  if (view === "menu"){
    showButton();
  }
  if (view === "field"){
    showZone();
    gatherResources();
  }
  if (view === "castle"){
    showZone();
    gatherResources();
  }
}

function showButton(){
  rectMode(CENTER);
  fill (0, 225, 0);
  rect(rectX, rectY, rectWidth, rectHeight);
}

function showZone(){
  if(view === "castle"){
    rectMode(CENTER);
    fill(150);
    rect(300, 300, 600, 600);
    fill (150, 100, 50);
    rect(rectX, rectY, rectWidth, rectHeight);
  }
  if(view === "field"){
    rectMode(CENTER);
    fill(0, 150, 0);
    rect(300, 300, 600, 600);
    fill(150, 100, 50);
    rect (300, 200, 50, 500);
    fill (150);
    rect(rectX, rectY, rectWidth, rectHeight);
  }
}

function gatherResources(){
  if (timer === millis() + duration){
    ore = ore + mine;
    wood = wood + forest;
    wheat = wheat + farm;
    stone = stone + quarry;
    timer = millis();
  }
}