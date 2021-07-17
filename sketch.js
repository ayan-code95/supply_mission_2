var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var back
var survivor
var sprito
var sprito2
var sprito3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	backIMG=loadImage("backgr.jpg")
	survivorIMG=loadImage("survivor.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	back=createSprite(400, 350, 800, 700)
	back.addImage(backIMG)
	back.scale=3

     sprito=createSprite(400,650,210,20)
	 sprito.shapeColor="red"

	 sprito2=createSprite(300,600,10,100)
	 sprito2.shapeColor="red"

	 sprito3=createSprite(500,600,10,100)
	 sprito3.shapeColor="red"








	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody,false)
    
  }
}
