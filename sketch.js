const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480, 800);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(240, 790, 475, 10);

  Engine.run(engine);
}

function draw() {
  background("black");  
  
  ground.display();
}

for (var k = 0; k <= width; k = k + 80) {
  division.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
}