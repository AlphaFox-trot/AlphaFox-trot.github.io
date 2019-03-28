// Project Title
// Your Name
// Date

let ballArray;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(let i = 0; i < 100; i++){
    let newBall = {
      x: random(width),
      y: random(height),
      dx: random(-5, 5),
      dy: random(-5, 5),
      radius: random(10, 50),
      color: color(random(225), random(225), random(225), random(225)),
    };
    ballArray.push(newBall);
  }
}

function draw() {
  background(220);
  
  for (let i = 0; i < ballArray.length; i++){
    //move ball
    ballArray[i].x += ballArray[i].xd;
    ballArray[i].x += ballArray[i].xd;

    //display ball
    fill(ballArray[i].color);
    noStroke();
    ellipse(ballArray[i].x, ballArray[i].y, ballArray[i].radius*2, ballArray[i].radius*2);
  }
}
