var fixedRect, movingRect;
var speed,weight;
function setup() {
  createCanvas(1200,300);
  fixedRect = createSprite(1100, 145, 30, 80);
  fixedRect.shapeColor = "grey";
  fixedRect.debug = false;
  movingRect = createSprite(100,150,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
  speed=random(55,90)
  weight=random(400,1500)
}



function draw() {
  background(0,0,0);
 // movingRect.collide(fixedRect)
 movingRect.velocityX = speed;

if(fixedRect.x-movingRect.x<(movingRect.width+fixedRect.width)/2)
{
  movingRect.velocityX=0;
  var deformation = 0.5 * weight * speed * speed /22509
  if(deformation>180)
  {
    movingRect.shapeColor="green"
  }
  if(deformation<180 && deformation>100)
  {
    movingRect.shapeColor="blue"
  }
  if(deformation<100)
  {
    movingRect.shapeColor="red"
  }
}

  drawSprites();
}


