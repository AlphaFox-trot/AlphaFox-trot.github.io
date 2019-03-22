// Hax Simulator
// Felix
// March 15

let colour, name, chances, event, difficulty;
let level, area, menu, lives, cash, price, time;
let timer, buffer;
let listColours = ["red", "blue", "green", "yellow", "purple", "cyan"];
let eventList = [];
let buttonX1, buttonX2, buttonY1, buttonY2;
let extraTime, extraCash, extraLives;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  menu = "premain";
  buttonX1 = windowWidth/1.5;
  buttonX2 = windowWidth/3;
  buttonY1 = windowHeight/2;
  buttonY2 = windowHeight/2;
  extraTime = 1;
  extraCash = 1;
  extraLives = 2;
  cash = 50;
  price = 10;
  chances = 5;
  buffer = 0;
}

function draw() {
  background(220);
  showMenu();
  if (mouseIsPressed && menu === "premain" && mouseX >= buttonX1 - 125 && mouseX <= buttonX1 + 125 && mouseY >= buttonY1 - 50 && mouseY <= buttonY1 + 50){
    menu = "main";
    difficulty = 100;
    chances = 5;
    buffer = 20;
    buttonX1 = windowWidth/2;
    buttonX2 = windowWidth/2;
    buttonY1 = windowHeight/3;
    buttonY2 = windowHeight/1.5;
    eventList = ["inverted", "flipped",  "nothing",  "nothing",  "nothing",  "nothing",  "nothing",  "nothing",  "nothing",  "nothing",  "nothing"];
  }
  else if (mouseIsPressed && menu === "premain" && mouseX >= buttonX2 - 125 && mouseX <= buttonX2 + 125 && mouseY >= buttonY2 - 50 && mouseY <= buttonY2 + 50){
    menu = "main";
    difficulty = 250;
    chances = 3;
    buffer = 20;
    buttonX1 = windowWidth/2;
    buttonX2 = windowWidth/2;
    buttonY1 = windowHeight/3;
    buttonY2 = windowHeight/1.5;
    eventList = ["inverted", "flipped", "flipped", "nothing",  "nothing",  "nothing",  "nothing",  "nothing",  "nothing"];
  }
  else if (mouseIsPressed && menu === "main" && mouseX >= buttonX1 - 125 && mouseX <= buttonX1 + 125 && mouseY >= buttonY1 - 50 && mouseY <= buttonY1 + 50 && buffer < 0){
    menu = "play";
    lives = extraLives;
    level = 0;
    progress();
    time = 1000;
  }
  else if (mouseIsPressed && menu === "main" && mouseX >= buttonX2 - 125 && mouseX <= buttonX2 + 125 && mouseY >= buttonY2 - 50 && mouseY <= buttonY2 + 50 && buffer < 0){
    menu = "upgrades";
    buttonY2 = windowHeight/1.2;
  }
  else if (mouseIsPressed && menu === "upgrades" && mouseX >= buttonX2 - 125 && mouseX <= buttonX2 + 125 && mouseY >= buttonY2 - 50 && mouseY <= buttonY2 + 50){
    menu = "main";
    buttonY2 = windowHeight/1.5;
  }
  buffer--;
}

function keyPressed() {
  if (event === "inverted"){
    if (menu === "play" && keyCode === RIGHT_ARROW && colour === name) {
      progress();
    } 
    else if (menu === "play" && keyCode === LEFT_ARROW && colour !== name) {
      progress();
    }
    else if (menu === "play"){
      lives--;
      level ++;
      colour = random (listColours);
      name = round(random(1, 3));
      event = random(eventList);
      if (name === 1){
        name = colour;
      }
      else{
        name = random (listColours);
      }
    }
  }
  else if (event === "nothing" || event === "flipped"){
    if (menu === "play" && keyCode === LEFT_ARROW && colour === name) {
      progress();
    } 
    else if (menu === "play" && keyCode === RIGHT_ARROW && colour !== name) {
      progress();
    }
    else if (menu === "play"){
      lives--;
      level ++;
      colour = random (listColours);
      name = round(random(1, 3));
      event = random(eventList);
      if (name === 1){
        name = colour;
      }
      else{
        name = random (listColours);
      }
    }
  }
  if (menu === "upgrades" && keyCode === 81 && price <= cash){
    extraTime++;
    cash = cash - price;
    price = price + 1;
  }
  else if (menu === "upgrades" && keyCode === 87 && price <= cash){
    extraCash++;
    cash = cash - price;
    price = price + 1;
  }
  else if (menu === "upgrades" && keyCode === 69 && price <= cash){
    extraLives++;
    cash = cash - price;
    price = price + 1;
  }
}

function progress(){
  level ++;
  colour = random (listColours);
  name = round(random(1, 3));
  event = random(eventList);
  if (name === 1){
    name = colour;
  }
  else{
    name = random (listColours);
  }
  cash = cash + round(level / 10);
  time = time + extraTime * 10;
}

function generateWords(){
  if (colour === "red"){
    fill(225, 0, 0);
  }
  else if (colour === "green"){
    fill(0, 225, 0);
  }
  else if (colour === "blue"){
    fill(0, 0, 225);
  }
  else if (colour === "yellow"){
    fill(180, 180, 30);
  }
  else if (colour === "purple"){
    fill(225, 0, 225);
  }
  else if (colour === "cyan"){
    fill(50, 180, 180);
  }
}

function showMenu(){
  if (menu === "premain"){
    textSize(30);
    fill(10, 200, 10);
    rectMode(CENTER);
    rect(buttonX1, buttonY1, 250, 100);
    rect(buttonX2, buttonY2, 250, 100);
    fill(0);
    textAlign(CENTER);
    text("Easy", buttonX1, buttonY1);
    text("Hard", buttonX2, buttonY2);
    textAlign(LEFT);
  }
  if (menu === "main"){
    textSize(30);
    fill(10, 200, 10);
    rectMode(CENTER);
    rect(buttonX1, buttonY1, 250, 100);
    rect(buttonX2, buttonY2, 250, 100);
    fill(0);
    textAlign(CENTER);
    text("Play", buttonX1, buttonY1);
    text("Upgrades", buttonX2, buttonY2);
    textAlign(LEFT);
    text("You have " + chances + " chances left", 100, 50);
  }
  if (menu === "upgrades"){
    fill(10, 200, 10);
    rectMode(CENTER);
    rect(buttonX2, buttonY2, 250, 100);
    fill(0);
    textAlign(CENTER);
    text("Back", buttonX2, buttonY2);
    textAlign(LEFT);
    text("Push Q for a more time", 20, 50);
    text("Current time " + extraTime, 500, 50);
    text("Push W for more cash earnings", 20, 100);
    text("Current earnings " + extraCash, 500, 100);
    text("Push E for extra lives", 20, 150);
    text("Lives " + extraLives, 500, 150);
    text("Current cash " + cash, 50, 200);
    text("Next upgrade costs " + price, 50, 250);
  }
  if (menu === "play"){
    generateWords();
    rectMode(CENTER);
    rect(windowWidth / 2, windowHeight / 2, 300, 300);
    fill(0);
    textSize(64);
    textAlign(CENTER);
    if(event === "flipped"){	
      push();
      translate(width/2, height/2);
      rotate(180);
      textAlign(CENTER, CENTER);
      text(name, 0, 0);
      textSize(32);
      pop();
    }
    else {
      text(name, windowWidth/2, windowHeight/2);
    }
    textAlign(LEFT);
    text("Lives" + lives, 50, 60); 
    text("Current level " + level, 50, 120); 
    text("time left " + time, 50, 180); 
    if(event === "inverted"){
      textAlign(CENTER);
      text("Inverted Controlls", windowWidth/2, 100);
      textAlign(LEFT);
    }
    if (lives <= -1){
      menu = "main";
      chances--;
      lives = 0;
      cash = cash + extraCash;
    }
    time--;
    if(time <= 0){
      lives--;
    }
  }
  if (chances <= 0){
    menu = "lose";
  }
  if (level >= difficulty){
    menu = "win";
  }
  if (menu === "lose"){
    textAlign(CENTER);
    text("You Lose", 250, windowHeight/2);
  }
  if (menu === "win"){
    textAlign(CENTER);
    text("You Win", 250, windowHeight/2);
  }
}
