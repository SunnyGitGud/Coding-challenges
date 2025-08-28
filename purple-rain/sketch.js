var drop = [];

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 500; i++) {
    drop[i] = new Drop()
  }
}

function draw() {
  background(230, 230, 250);
  for (var i = 0; i < drop.length; i++) {
    drop[i].fall();
    drop[i].show();
  }
}

