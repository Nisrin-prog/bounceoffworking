var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject1.velocityY =  4;

  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(400, 100, 50, 50);
  gameObject3.shapeColor = "red";
  
  gameObject4 = createSprite(1000,100, 50, 50);
  gameObject4.shapeColor = "yellow";
  gameObject4.velocityY = -4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  bounceOff(gameObject1,gameObject4);
  drawSprites();
}

