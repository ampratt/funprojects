function Display() {
  // function Display(element, x, y) {
  // element.position(x, y);
  this.score = 0;
  this.hitCount = 0;
  this.scoreDisplay = createElement('h3', 'Score: 0. Hit Count: 0');
  //createSpan('Score: ', this.score);
  // this.display = createSpan(`Score: ${this.score}`);

  this.show = function () {
    this.scoreDisplay;
    // createSpan(`Score: ${this.score}`);
  }



  this.update = function () {
    if (bird.getHitCount()) {
      console.log('bird Crashed');
      this.hitCount = bird.getHitCount();
    }
    this.score = Math.floor(frameCount / 40);
    this.scoreDisplay.html(`Score: ${this.score}. Hit Count: ${this.hitCount}`)
    // console.log('score: ', this.score);
  }
}