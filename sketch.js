var rect1,rect2;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite (400,100,100,50);
  rect2 = createSprite (600,100,100,50);
}

function draw() {
  background(0);  
  rect1.shapeColor = "green"
  rect1.debug = true;  
  rect2.shapeColor = "green"
  rect2.debug = true; 
  rect2.x = mouseX;
  rect2.y = mouseY;
  Touching();
  console.log (rect2.x-rect1.x);
  drawSprites();
}

function Touching(){
  if(rect2.x-rect1.x < rect2.width/2+rect1.width/2&&
    (rect1.x-rect2.x < rect1.width/2+rect2.width/2)&&
    (rect2.y-rect1.y < rect2.height/2+rect1.height/2)&&
    (rect1.y-rect2.y < rect1.height/2+rect2.height/2)){
  rect1.shapeColor = "red";
  rect2.shapeColor = "red";
  }
  else{
    rect1.shapeColor = "green"
    rect2.shapeColor = "green"
  }
}
