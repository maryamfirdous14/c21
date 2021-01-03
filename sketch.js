var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box1=createSprite(100,100,30,30)
  box1.shapeColor="blue"
  box1.velocityX=2;
  box2=createSprite(700,100,30,30)
  box2.shapeColor="yellow"
  box2.velocityX=-2
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 /*if(istouch(movingRect,box2)) {
  movingRect.shapeColor = "red";
  box2.shapeColor = "red";

 }
 else{
  movingRect.shapeColor = "green";
  box2.shapeColor = "green";
 }*/

 istouch(movingRect,box2)
 bounceoff(box1,box2)
  drawSprites();
}
