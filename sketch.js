var wedge;
var angle=60;
var astronaut;
var move; 
var edges;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  var ops = {
    isStatic:true
  
  }

 edges=createEdgeSprites();
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  wedge=Bodies.rectangle(100,200,100,20,ops);
  World.add(world,wedge);

  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  astronaut=createSprite(100,100,50,50);
  astronaut.addAnimation("moce.png","move1.png")
}


function draw() 
{
  createCanvas(200,200)
  background(51);
  Engine.update(engine);
  Matter.Body.rotate(wedge,angle);
  push();
  Translate
  rotate(angle)
  rect(0,0,100,20);

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 
  astronaut.bounceOff(edges);

  if (keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX=1;
    astronaut.velocityY=1;
  }
}

