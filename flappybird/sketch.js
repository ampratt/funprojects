let bird;
let pipes = [];
let scoreDisplay;
this.insert = 60;
this.prevPipeFrame = 0;
let crashSound;

function setup() {
  // put setup code here
  crashSound = loadSound('assets/tim_crash_short.mp3');
  // createCanvas(400, 600);
  bird = new Bird();
  this.scoreDisplay = new Display(bird);
  var cnv = createCanvas(windowWidth, windowHeight - 60);
  cnv.style('display', 'block');
  pipes.push(new Pipe());
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 60);
}

function keyPressed() {
  if (key === ' ') {
    bird.up();
  }
}

function getRandomPipeTime(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
  // return Math.floor(Math.random() * (max - min + 1) + min);
}

function draw() {

  // update score
  this.scoreDisplay.show();
  this.scoreDisplay.update();

  // put drawing code here
  background(0, 0, 255);

  bird.update();
  bird.show();

  // for (var i = 0; i < pipes.length; i++) {
  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    // bird hits pipe
    pipes[i].isHitBy(bird);
    // if (pipes[i].hits(bird)) {
    //   // crashSound.play();
    //   // console.log('KABLAAM! HIT!');
    // }


    // remove past pipe
    if (pipes[i].offScreen()) {
      pipes.splice(i, 1);
    }
  }

  // let insert = getRandomPipeTime(30, 90);
  // if (frameCount % 70 === 0) {
  if (frameCount > this.prevPipeFrame + this.insert) {
    this.prevPipeFrame = frameCount;
    pipes.push(new Pipe());
    this.insert = getRandomPipeTime(30, 90);
  }

}

