let pos;
var prev;

function setup() {
  createCanvas(400, 400);
  background(51);
  pos = createVector(200, 200);
  prev = pos.copy();
}

function draw() {
  stroke(255);
  strokeWeight(2);

  line(pos.x, pos.y, prev.x, prev.y);
  prev.set(pos);


  var step = p5.Vector.random2D();

  var r = random(100);

  if ( r < 1) {
    step.mult(random(25, 50));
  } else {
    step.setMag(2);
  }

  pos.add(step);

  if (pos.x > width)  pos.x = 0;
  if (pos.x < 0)      pos.x = width;
  if (pos.y > height) pos.y = 0;
  if (pos.y < 0)      pos.y = height;
}
