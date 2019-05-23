//bubble sort

let someNumbers = [5, 15, 3, 8, 9, 1, 20, 7];
let done = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bubbleSort(someNumbers);
}

function draw() {
  background(220);
}

function bubbleSort(anArray){
  while (done !== true){
    done = true;
    for(let i = 0; i < anArray.length; i++){
      if (anArray[i] > anArray[i+1]){
        let number1 = anArray[i];
        anArray[i] = anArray[i+1];
        anArray[i+1] = number1;
        done = false;
      }
    }
    console.log(anArray);
  }
  return anArray;
}