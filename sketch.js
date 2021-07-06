
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   var ball_options={
	 restitution:0.3,
	 friction:0,
	 density:1.2,
	 isStatic:false , 
   }

   ball=Bodies.circle(300,100,20,ball_options)
   World.add(world,ball)
	Engine.run(engine);

	groundOBJ=new Ground(800,670,1600,20)
	lsOBJ=new Ground(1100,600,20,120)
	rsOBJ=new Ground(1350,600,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundOBJ.show()
  lsOBJ.show()
  rsOBJ.show()

  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW)
	{ Matter.Body.applyForce(ball,ball.position,{x:85,y:-85}); } }


