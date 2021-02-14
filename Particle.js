class Particle {
    constructor(x, y, color) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x, y, this.r, options);
      this.color = color(random(0, 255), random(0, 255), random(0, 255));
      World.add(world, this.body);
    }
    display() {
      push();
      var pos = this.body.position;
      translate(pos.x, pos.y, this.color);
      rotate(this.body.angle);
      pop();
    }
  };
