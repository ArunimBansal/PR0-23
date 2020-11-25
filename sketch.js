var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	var package_options= {
		restitution:1
			}
	packageSprite=createSprite(width/2, 80, 10,10,package_options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
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
  keyPressed()
  rectangle1=new Rectangle(400,550,200,30)
  rectangle1.display()
  rectangle2=new Rectangle(300,465,30,200)
  rectangle2.display()
  rectangle3=new Rectangle(485,450,30,200)
  rectangle3.display()
  packageBody.x=rectangle1.x 
  packageBody.y=rectangle1.y
  packageBody.x=rectangle2.x
  packageBody.y=rectangle2.x
  packageBody.x=rectangle3.x
  packageBody.y=rectangle3.x
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic( packageBody,  false);
    
  }
}



