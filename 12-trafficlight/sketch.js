// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/

let timer;
let state;
let gDuration;
let yDuration;
let rDuration;

function setup() {
  createCanvas(600, 600);
  state = 1;
  timer = 0;
  gDuration = 5000;
  yDuration = 1500;
  rDuration = 3500;
}

function draw() {
  background(255);
  drawOutlineOfLights();
  checkState();
  changeState();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function checkState() {
  if (state === 1 && millis () > timer + gDuration){
    state = 2;
    timer = millis(); 
  }
  else if (state === 2 && millis () > timer + yDuration){
    state = 3;
    timer = millis(); 
  }
  else if (state === 3 && millis () > timer + rDuration){
    state = 1;
    timer = millis(); 
  }
}

function changeState(){
  if (state === 1){
    fill(0, 225, 0);
    ellipse(width/2, height/2 + 65, 50, 50);
  }
  else if (state === 2){
    fill(225, 200, 50);
    ellipse(width/2, height/2, 50, 50);
  }
  else if (state === 3){
    fill(225, 0, 0);
    ellipse(width/2, height/2 - 65, 50, 50);
  }
}

