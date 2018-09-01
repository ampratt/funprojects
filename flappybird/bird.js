function Bird() {
    this.y = height / 2;
    this.x = 100;

    this.gravity = 0.6;
    this.jump = -15;
    this.velocity = 0;

    this.draw = () => {
        fill(255);
        ellipse(this.x, this.y, 32, 32);
        noStroke();
    }

    this.up = () => {
        console.log('GO UP ALREADY...PLEASE!')
        this.velocity += this.jump;
        this.y += this.velocity;
    }

    this.update = () => {
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height;
        }
        if (this.y < 0) {
            this.y = 0;
        }
    }


}