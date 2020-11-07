var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var b1, b2, b3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");

}

function setup() {

	createCanvas(800, 700);
	rectMode(CENTER);

	b01 = createSprite(width/2, 654, 200, 20);
	b01.shapeColor = "red";

	b02 = createSprite(290, 610, 20, 100);
	b02.shapeColor = "red";

	b03 = createSprite(510, 610, 20, 100);
	b03.shapeColor = "red";

	packageSprite = createSprite(width / 2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width / 2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	groundSprite = createSprite(width / 2, height-35, width,10);
	groundSprite.shapeColor = color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2, 200, 5, {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 634, width, 20, {isStatic:true});
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw(){

  background(0);
  rectMode(CENTER);

  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;


  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	
	if (keyCode === DOWN_ARROW){
		Matter.Body.setStatic(packageBody, false);
	}

}