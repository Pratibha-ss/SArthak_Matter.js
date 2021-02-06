//NameSpacing
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

// You took a variable for your engine and your world-----STEP 1
var engine, world;
var ground,ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  //Declaring which option you used to deal with the physics.------STEP 6
  var ground_options = {
    isStatic: true
  }
  //You created your ground body -------STEP 2
  //ground_options----Because you wanted to deal with the physics of your body so you had to write it there.-------STEP 5
  ground = Bodies.rectangle(200,390,200,20,ground_options)
  //You added it to the world------STEP 3
  World.add(world,ground)
  
  var ball_options = {
    restitution: 1
  }

  ball = Bodies.circle(200,100,20,ball_options)
  World.add(world,ball);

  console.log(ground)
 
}

function draw() {
  background(195,255,155); 
  Engine.update(engine) 
  //You displayed your body by writing the rect instruction for it-----STEP  4
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
  
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}