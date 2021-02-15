class Plinko {
    constructor(x, y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x, y, 15, options);
      this.radius = 10;
      World.add(world, this.body);
    }
    display() {
      push();
      ellipseMode(RADIUS);
      var pos = this.body.position;
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      ellipse(pos.x, pos.y, this.radius, this.radius);
      pop();
    }
  };
