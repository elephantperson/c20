var movingRect, fixedRect

function setup(){
  createCanvas(1600, 800);

  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "orange";
  fixedRect.debug = true;

  movingRect = createSprite(300,200,80,30);
  movingRect.shapeColor = "orange";
  movingRect.debug = true;

}

function draw(){
  background(0);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor="white";
    fixedRect.shapeColor="white";
  }
  else{
    movingRect.shapeColor="orange";
    fixedRect.shapeColor="orange";
  }

  drawSprites();

}