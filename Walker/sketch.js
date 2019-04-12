// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker{
  constructor(x, y, aColour, aSpeed) {
    this.x = x;
    this.y = y;
    this.color = aColour;
    this.speed = aSpeed; 
  }

  display(){
    fill(this.color);
    stroke(this.color);
    ellipse(this.x, this.y, 2, 2);
  }

  move() {
    let choice = random(100);
    if (choice < 25){
      this.y -= this.speed;
    } 
    else if (choice < 50){
      this.y += this.speed;
    } 
    else if (choice < 75){
      this.x += this.speed;
    }
    else {
      this.x -= this.speed;
    }
  }
}

//let felix;
//let amy;
let enemyList;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // felix = new Walker(150, 250, "purple", 4);
  //amy = new Walker(600, 500, "blue", 4);
  for(let i = 0; i < 10; i++){
    let newEnemy = new Walker(width/2, height/2, color(random(255),random(255),random(255)), 4);
    enemyList.push(newEnemy);
  }
}

function draw() {
  for(let i = 0; i < enemyList.length; i++){
    enemyList[i].move();
    enemyList[i].display();

  }
  //felix.move();
  //felix.display();
  //amy.move();
  //amy.display();
}
