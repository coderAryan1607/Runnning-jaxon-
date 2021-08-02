var jasonRunning;
var jason;
var pathImg, path, leftLaneBound, rightLaneBound;


function preload(){
  //pre-load image
  jasonRunning = loadAnimation("Runner-1.png", "Runner-2.png");

  //moving background
  pathImg = loadImage("path.png");
}

function setup(){
  background("red");
  
  createCanvas(400,800);

  
  
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 6;
  path.scale = 1.2;


  jason = createSprite(200,600);
  jason.addAnimation("running", jasonRunning);
  jason.scale = 0.1;

  leftLaneBound = createSprite(40,400,20,800);
  leftLaneBound.visible = false;

  rightLaneBound = createSprite(370,400,20,800);
  rightLaneBound.visible = false;

  jason.setCollider("circle",0,0,400);
  jason.debug = false
  
}

function draw() {
  background(0);
  //console.log(World.mouseX)
  path.velocityY = 6;
  
  //code to reset the background
  if(path.y > 400)
  {
    path.y = 500/2;
    
  }
   
  moveIt();
  jason.collide(leftLaneBound);
  jason.collide(rightLaneBound);

 
  drawSprites();
}
function moveIt()
{
  if(keyDown("left")){
    jason.x = jason.x - 50;
  }
  if(keyDown("right")){
    jason.x = jason.x + 50;
  }
}