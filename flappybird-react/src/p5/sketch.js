import Bird from './bird';
import Pipe from './pipe';
import Display from './display';
import '../../node_modules/p5/lib/addons/p5.sound.min.js';

// assets
// import { unicorn } from '../assets/img/players/unicorn.png';

export default function sketch(p) {
  let bird;
  let pipes = [];
  let scoreDisplay;
  let crashSound;
  let backgroundMusic;

  let insertFrequency = 60;
  let prevPipeFrame = 0;

  let backgroundImage;
  let playerImage;
  let c;

  p.preload = function () {
    p.soundFormats('mp3', 'ogg');
    crashSound = p.loadSound('/assets/sounds/tim_crash_short_loud.mp3');
    backgroundMusic = p.loadSound('/assets/music/bensound-theduel.mp3');
    backgroundImage = p.loadImage('/assets/img/backgrounds/rainbow-drawing.jpg');
    playerImage = p.loadImage('/assets/img/players/unicorn.png');
  }

  p.setup = function () {
    // put setup code here
    bird = new Bird(p, playerImage, crashSound);
    scoreDisplay = new Display(p, bird, backgroundMusic, crashSound);
    var cnv = p.createCanvas(p.windowWidth, p.windowHeight - 60);
    // cnv.style('display', 'block');
    pipes.push(new Pipe(p));
    //   backgroundImage.loadPixels();
    //   // get color of middle pixel
    //   c = backgroundImage.get(backgroundImage.width / 2, backgroundImage.height / 2);
    backgroundMusic.setVolume(0.7);
    backgroundMusic.play();
  };


  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight - 60);
  }

  p.keyPressed = function () {
    if (p.key === ' ') {
      bird.up();
    }
  }
  p.mousePressed = function () {
    bird.up();
  }

  function _getRandomPipeTime(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    // return Math.floor(Math.random() * (max - min + 1) + min);
  }

  p.draw = function () {

    // update score
    scoreDisplay.show();
    scoreDisplay.update();

    // put drawing code here
    // background(c);
    // // imageMode(CENTER);
    p.background(202, 235, 254);
    p.imageMode(p.CORNERS);
    p.image(backgroundImage, 0, 0, p.windowWidth, p.windowHeight - 65);

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
    // if (p.frameCount % 70 === 0) {
    if (p.frameCount >
      prevPipeFrame + insertFrequency) {

      prevPipeFrame = p.frameCount;
      pipes.push(new Pipe(p));
      insertFrequency = _getRandomPipeTime(50, 90);
    }
  }

}



// export default function sketch(p) {
//   let rotation = 0;

//   p.setup = function () {
//     p.createCanvas(600, 400, p.WEBGL);
//   };

//   p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
//     if (props.rotation) {
//       rotation = props.rotation * Math.PI / 180;
//     }
//   };

//   p.draw = function () {
//     p.background(100);
//     p.noStroke();
//     p.push();
//     p.rotateY(rotation);
//     p.box(100);
//     p.pop();
//   };
// }
