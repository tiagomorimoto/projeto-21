const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var left;
var right;
var ball;

function preload()
{
	
}

function setup() {
createCanvas(1000, 800);
engine = Engine.create();
world = engine.world;

ground = new Ground(200,390,400,20);
right = new Ground(390,200,20,400);
left = new Ground(10,200,20,400);

var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

//Create the Bodies Here.
ball = Matter.Bodies.circle(200, 200, 15, ball_options);
World.add (world, ball);

Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



