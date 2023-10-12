
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;


function setup() {
	createCanvas(1200, 571);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	balls = new Balls(100, 600, 10);

	ground = new Ground(400,681,800,20);

    leftSide = new Dustbin(550,620,20,100);
	bottom = new Dustbin(610,660,100,20);
	rightSide = new Dustbin(670,620,20,100);
	Engine.run(engine);
	


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  balls.display();
  ground.display();
  leftSide.display();
  rightSide.display();
  bottom.display();
  
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:15, y:-15})
	}
}



