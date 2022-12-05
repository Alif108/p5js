let length = 600;
let width = 600;

let num_of_balls = 10;
let balls = []

function setup() {
  createCanvas(length, width);

  for (let i = 0; i < num_of_balls; i++) {
    balls.push(new Ball());
  }
}

function draw() {
  background(220);
  
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].display();
  }
}



class Ball {
  constructor() {
    this.weight = random(10, 30);
    this.xPos = random(0, length);
    this.yPos = random(0, width);
    this.xVel = 2;
    this.yVel = 0;
    this.xAcc = 0;
    this.yAcc = this.weight / 100;
  }

  move() {
    this.xPos += this.xVel;
    this.yPos += this.yVel;
    this.xVel += this.xAcc;
    this.yVel += this.yAcc;

    if (this.yPos > width || this.yPos < 0) {
      this.yVel *= -1;
    }
    if (this.xPos > length || this.xPos < 0) {
      this.xVel *= -1;
    }
  }

  display() {
    strokeWeight(this.weight);
    point(this.xPos, this.yPos);
  }
}