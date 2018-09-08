import '../../node_modules/p5/lib/addons/p5.dom.min.js';

export default function Display(p, bird, music, crashSound) {

  this.score = 0;
  this.distance = 0;
  this.hitCount = 0;
  this.penalty = 0;
  this.display = p.createDiv(''); //.size(p.windowWidth, p.windowHeight);
  this.display.class('scoreDisplay');
  this.distanceDisplay = p.createElement('h3', 'Distance: 0');
  this.hitsDisplay = p.createElement('h3', 'Hits: 0');
  this.scoreDisplay = p.createElement('h3', 'Score: 0');
  this.distanceDisplay.parent(this.display);
  this.hitsDisplay.parent(this.display);
  this.scoreDisplay.parent(this.display);

  this.button = p.createButton('Exit');
  // this.button.position(p.windowWidth, p.windowHeight);
  this.button.class('exitBtn');
  this.button.parent(this.display);
  this.button.mousePressed(quitGame);


  function quitGame() {
    music.stop();
    crashSound.stop();
    p.remove();
    // var urlPath = p.getURLPath();
    // console.log('url: ', urlPath);
    window.location = '/';
  }

  this.update = function () {
    this.hitCount = bird.getHitCount();
    this.distance = Math.floor(p.frameCount / 20);
    this.penalty = this.hitCount * 4;
    this.score = (this.distance * 2) - this.penalty;
    this.scoreDisplay.html(`Distance: ${this.distance}. Hits: ${this.hitCount}. Score: ${this.score}`)
    this.distanceDisplay.html(`Distance: ${this.distance}`);
    this.hitsDisplay.html(`Hits: ${this.hitCount}`);
    this.scoreDisplay.html(`Score: ${this.score}`);
  }
}