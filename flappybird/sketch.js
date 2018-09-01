let bird;

function setup() {
  // put setup code here
  createCanvas(400, 400);
  bird = new Bird();
}

function keyPressed() {
  if (key === ' ') {
    bird.up();
  }
}
function draw() {
  // put drawing code here
  background(0, 0, 255)
  bird.draw();
  bird.update();
}

