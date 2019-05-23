// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let points = [
  {x: 500, y: 50},
  {x: 50, y: 850},
  {x: 950, y: 850}
];

function setup() {
  createCanvas(1000, 900);

}

function draw() {
  background(220);
  sierpinski(points, 7);
}

function midpoint(point1, point2){
  let xDiff = point1.x + point2.x;
  let yDiff = point1.y + point2.y;
  let theMidPoint = {
    x: xDiff/2,
    y: yDiff/2
  };
  return theMidPoint;
}

function sierpinski (points, degree){
  triangle(points[0].x, points[0].y,
    points[1].x, points[1].y,
    points[2].x, points[2].y);

  if(degree > 0){
    sierpinski([points[0],
      midpoint(points[0], points[1]),
      midpoint(points[0], points[2])],
    degree - 1);

    sierpinski([points[1],
      midpoint(points[1], points[0]),
      midpoint(points[1], points[2])],
    degree - 1);

    sierpinski([points[2],
      midpoint(points[2], points[1]),
      midpoint(points[2], points[0])],
    degree - 1);
  }
}
