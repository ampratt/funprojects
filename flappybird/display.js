function Display() {
  // function Display(element, x, y) {
  // element.position(x, y);
  this.score = 0;
  this.distance = 0;
  this.hitCount = 0;
  this.penalty = 0;
  this.scoreDisplay = createElement('h3', 'Distance: 0. Hits: 0. Score: 0');
  //createSpan('Score: ', this.score);
  // this.display = createSpan(`Score: ${this.score}`);

  this.show = function () {
    this.scoreDisplay;
    // createSpan(`Score: ${this.score}`);
  }



  this.update = function () {
    this.hitCount = bird.getHitCount();
    this.distance = Math.floor(frameCount / 20);
    this.penalty = this.hitCount * 4;
    this.score = (this.distance * 2) - this.penalty;
    this.scoreDisplay.html(`Distance: ${this.distance}. Hits: ${this.hitCount}. Score: ${this.score}`)
  }
}