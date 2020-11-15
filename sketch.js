const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, paper, dustbin;
var paperIMG, paperSprite;
var dustbinIMG, dustbinSprite;

function preload()
{	
	paperIMG = loadImage("paper.png");
	dustbinIMG = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500, 680);
	dustbin = new Dustbin(800, 655);
	paper = new Paper(100, 350, 70);

	paperSprite=createSprite(100, 350);
	paperSprite.addImage(paperIMG);
	paperSprite.scale=0.6;	

	dustbinSprite=createSprite(800, 515);
	dustbinSprite.addImage(dustbinIMG);
	dustbinSprite.scale=0.9;

	Engine.run(engine);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
		if (paper.body.position.x < 200)
			Matter.Body.applyForce(paper.body, paper.body.position, {x:10, y:-15});
    }
}

function draw() {
    rectMode(CENTER);
    background(200);
	paperSprite.x= paper.body.position.x; 
	paperSprite.y= paper.body.position.y;
	
	ground.display();
    dustbin.display();
    paper.display();
    drawSprites();
    keyPressed();
}