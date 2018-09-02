let bird;
let pipes = [];
let scoreDisplay;
// let crashSound;
// let backgroundMusic;

let insertFrequency = 60;
let prevPipeFrame = 0;

let backgroundImage;
let playerImage;
let c;
function preload() {
  soundFormats('mp3', 'ogg');
  crashSound = loadSound('assets/sounds/tim_crash_short_loud.mp3');
  backgroundMusic = loadSound('assets/music/bensound-theduel.mp3');
  // backgroundImage = loadImage('assets/img/backgrounds/rainbow-background-vector.jpg');
  backgroundImage = loadImage('assets/img/backgrounds/rainbow-drawing.jpg');
  // playerImage = loadImage('assets/img/players/superman-logo.png');
  playerImage = loadImage('assets/img/players/unicorn.png');
}

function setup() {
  // put setup code here
  // createCanvas(400, 600);
  bird = new Bird(playerImage, crashSound);
  this.scoreDisplay = new Display(bird);
  // var cnv = createCanvas(650, 910);
  // var cnv = createCanvas(595, 490);
  var cnv = createCanvas(windowWidth, windowHeight - 65);
  // cnv.style('display', 'block');
  pipes.push(new Pipe());
  //   backgroundImage.loadPixels();
  //   // get color of middle pixel
  //   c = backgroundImage.get(backgroundImage.width / 2, backgroundImage.height / 2);
  this.backgroundMusic.setVolume(0.7);
  this.backgroundMusic.play();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 65);
}

function keyPressed() {
  if (key === ' ') {
    bird.up();
  }
}
function mousePressed() {
  bird.up();
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
  // background(c);
  // // imageMode(CENTER);
  background(202, 235, 254);
  imageMode(CORNERS);
  image(backgroundImage, 0, 0, windowWidth, windowHeight - 65);

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
  if (frameCount >
    prevPipeFrame + insertFrequency) {

    prevPipeFrame = frameCount;
    pipes.push(new Pipe());
    insertFrequency = getRandomPipeTime(50, 90);
  }

}

