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
      var pos = this.body.position;
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      pop();
    }
  };
