const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particle = [];
var plinko = [];
var division = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480, 800);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(240, 795, 475, 10);

  for(var k = 0; k <= width; k = k + 80) {
    division.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var p = 35; p <=width; p = p + 50) {
    plinko.push(new Plinko(p, 100));
  }

  for(var p = 18; p <=width; p = p + 50) {
    plinko.push(new Plinko(p, 200));
  }

  for(var p = 35; p <=width; p = p + 50) {
    plinko.push(new Plinko(p, 300));
  }

  for(var p = 18; p <=width; p = p + 50) {
    plinko.push(new Plinko(p, 400));
  }

  Engine.run(engine);
}

function draw() {
  background("black");  
  
  for(var i = 0; i < division.length; i = i + 1) {
    division[i].display();
  }

  for(var a = 0; a < plinko.length; a = a + 1) {
    plinko[a].display();
  }

  if(frameCount % 60 === 0) {
    particle.push(new Particle(random(0, 480), 0, 10))
  }

  for(var z = 0; z < particle.length; z = z + 1) {
    particle[z].display();
  }

  ground.display();
}

