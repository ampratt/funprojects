export default function Display(p, bird) {
  // function Display(element, x, y) {
  // element.position(x, y);
  let score = 0;
  let distance = 0;
  let hitCount = 0;
  let penalty = 0;
  let scoreDisplay = p.createElement('h3', 'Distance: 0. Hits: 0. Score: 0');
  //createSpan('Score: ', this.score);
  // this.display = createSpan(`Score: ${this.score}`);

  this.show = function () {
    this.scoreDisplay;
    // createSpan(`Score: ${this.score}`);
  }



  this.update = function () {
    this.hitCount = bird.getHitCount();
    this.distance = Math.floor(p.frameCount / 20);
    this.penalty = this.hitCount * 4;
    this.score = (this.distance * 2) - this.penalty;
    this.scoreDisplay.html(`Distance: ${this.distance}. Hits: ${this.hitCount}. Score: ${this.score}`)
  }
}