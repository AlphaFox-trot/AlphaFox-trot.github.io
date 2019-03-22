// Refactor the following code
// - in other words, keep the same functionality, but improve the method used

let white = true;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  for (let x = 0; x < 600; x += 75) {
    for (let y = 0; y < 600; y += 75) {
      if(white){
        fill (225);
        white = !white;
      }
      else{
        fill (0);
        white = !white;
      }
      rect(x, y,75,75); 
    }
    white = !white;
  }
}

