class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
  }

  update(speed) {
    this.z -= speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  show() {
    fill(255);
    noStroke();

    let sx = map(this.x / this.z, -1, 1, -width / 2, width / 2);
    let sy = map(this.y / this.z, -1, 1, -height / 2, height / 2);

    let r = map(this.z, 0, width, 4, 0);
    
    //ellipse(sx, sy, r, r);
     let px = map(this.x/this.pz, -1, 1, -width/2, width/2);
     let py = map(this.y/this.pz, -1, 1, -height/2, height/2);

    this.pz = this.z;

    stroke(255);
    strokeWeight(r);
    line(px, py, sx, sy);
  }
}

