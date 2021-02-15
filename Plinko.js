class Plinko {
    constructor(x, y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.radius = 10;
      World.add(world, this.body);
    }
    display() {
      push();
      ellipseMode(RADIUS);
      var pos = this.body.position;
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };
