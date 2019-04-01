// Project Title
// Your Name
// Date

let gridSize = 100;
let grid;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = width/100;
  grid = createRandom2DArrays(gridSize, gridSize);
}

function draw() {
  background(255);
  displayGrid();
}

function displayGrid(){
  for(let y = 0; y < gridSize; y++){
    for(let x = 0; x < gridSize; x++){
      if (grid[y][x] === 1){
        fill(0);
      }
      else{
        fill(225);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function create2DArrays(cols, rows){
  let emptyArray = [];
  for(let i = 0; i < rows; i++){
    emptyArray.push([]);
    for(let j = 0; j < cols; j++){
      emptyArray[i].push(0);
    }

  }
  return emptyArray;
}

function createRandom2DArrays(cols, rows){
  let emptyArray = [];
  for(let i = 0; i < rows; i++){
    emptyArray.push([]);
    for(let j = 0; j < cols; j++){
      if(random(100) < 50){
        emptyArray[i].push(0);
      }
      else{
        emptyArray[i].push(1);
      }
    }

  }
  return emptyArray;
}