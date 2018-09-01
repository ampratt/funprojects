function Bird() {
  this.y = height / 2;
  this.x = 100;

  this.gravity = 0.6;
  this.jump = -15;
  this.velocity = 0;

  this.hitCount = 0;
  this.crashed = false;
  this.highlightDuration = 0;
  this.gameover = false;
  this.crashSound = loadSound('assets/tim_crash_short.mp3');

  this.show = () => {
    fill(255);
    if (this.crashed || this.highlightDuration !== 0) {
      fill(255, 0, 0);
      // this.crashSound.play();
      this.crashed = false;
      this.gameover = true;
      this.hitCount += 1;
    }
    if (this.highlightDuration !== 0 && (frameCount - this.highlightDuration > 5)) {
      this.highlightDuration = 0;
    }

    ellipse(this.x, this.y, 32, 32);
    noStroke();
  }

  this.up = () => {
    this.velocity += this.jump;
    this.y += this.velocity;
  }

  this.crash = () => {
    this.crashSound.play();
    this.crashed = true;
    this.highlightDuration = frameCount;
  }

  this.getHitCount = () => this.hitCount;

  this.update = () => {
    this.velocity += this.gravity;
    this.velocity *= 0.95;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      if (!this.gameover) this.crash();
    }
    if (this.y < 0) {
      this.y = 0;
      if (!this.gameover) this.crash();
    }
  }


}