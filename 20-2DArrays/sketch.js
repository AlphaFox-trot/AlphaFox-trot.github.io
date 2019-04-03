// Project Title
// Your Name
// Date

let gridSize = 50;
let grid;
let cellSize;

function setup() {
  if (windowWidth > windowHeight){
    createCanvas(windowHeight, windowHeight);
  }
  else{
    createCanvas(windowWidth, windowWidth);
  }
  cellSize = width/gridSize;
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

function update(){
  let nextTurn = create2DArrays(gridSize, gridSize);

  for(let y = 0; y < gridSize; y++){
    for(let x = 0; x < gridSize; x++){
      let neighbors = 0;

      for (let i = -1; i <= 1; i++){
        for (let j = -1; j <= 1; i++){
          if (y+i >= 0 && y+i < gridSize && x+j >= 0 && x+j < gridSize){
            neighbors += grid[y+i][x+j];
          }
        }
      }

      neighbors -= grid[y][x];

      if(grid[y][x] === 1){// alive
        if (neighbors === 2 || neighbors === 3){
          nextTurn[y][x] = 1;
        }
        else{
          nextTurn[y][x] = 0;
        }
      }
      else{
        if (neighbors === 3){
          nextTurn[y][x] = 1;
        }
        else{
          nextTurn[y][x] = 0;
        }
      }
    }
  }
  grid = nextTurn;
}

function keyPressed(){
  if (key === " "){
    update();
  }
}

function mousePressed(){
  let xcord = floor(mouseX / cellSize);
  let ycord = floor(mouseY / cellSize);
  if (grid[ycord][xcord] === 1){
    grid[ycord][xcord] = 0;
  }
  else{
    grid[ycord][xcord] = 1;
  }
  
}