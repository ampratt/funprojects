// function Pipe() {
//   this.centerPoint = random(height);
//   this.spacing = 10;

//   this.top = random(height / 2);
//   this.bottom = random(height / 2);
//   this.x = width;
//   this.w = 20;
//   this.speed = 5;

//   this.show = () => {
//     fill(255);
//     rect(this.x, 0, this.w, this.top);
//     rect(this.x, height - this.bottom, this.w, height - this.bottom);
//   }

//   this.update = () => {
//     this.x -= this.speed;
//   }

// }

function Pipe() {
  this.top = random(height / 2);
  this.bottom = random(height / 2);
  this.x = width;
  this.w = 20;
  this.speed = 3;
  this.crashed = false;
  this.alreadyRegistered = false;

  // this.hits = function (bird) {
  this.isHitBy = function (bird) {
    // if (this.alreadyRegistered) return -1
    if (this.alreadyRegistered &&
      (bird.y < this.top || bird.y > height - this.bottom)
      && (bird.x > this.x + this.w)) {
      this.crashed = false;
      bird.crash();
      // bird.crashed = false;
      // console.log('cleared')
      this.alreadyRegistered = false;
      return 0;
    }
    if (!this.alreadyRegistered &&
      (bird.y < this.top || bird.y > height - this.bottom)
      && (bird.x > this.x && bird.x < this.x + this.w)) {
      // console.log('registered CRASHED!')
      this.crashed = true;
      bird.crashed = true;
      this.alreadyRegistered = true;
      return 1;
    }
    if (this.alreadyRegistered &&
      (bird.y < this.top || bird.y > height - this.bottom)
      && (bird.x > this.x + this.w)) {
      this.crashed = false;
      bird.crash();
      // bird.crashed = false;
      // console.log('cleared 2')
      this.alreadyRegistered = false;
      return 0;
    }
    return 0
  }

  this.show = () => {
    fill(255);
    if (this.crashed) {
      fill(0, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, height - this.bottom);
  }

  this.update = () => {
    this.x -= this.speed;
  }


  this.offScreen = () => this.x < -this.w;

}