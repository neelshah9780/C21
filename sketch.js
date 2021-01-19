var thickness;
var bullet,wall;
var speed,weight;

function setup() {
  createCanvas(400,400);
  
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  wall=createSprite(350,75,thickness,80);
  bullet=createSprite(35,50,15,15);

}

function draw() {
  background("red");  
  drawSprites();

  if(keyDown("RIGHT_ARROW")){
    bullet.velocityX=speed;
  }

   bullet.collide(wall); 

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness); 
     }
     
     if(damage<10){
      wall.shapeColor="blue";
     }
     if(damage>10){
      wall.shapeColor="green";
     }
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
     return true;
  }
  return false;
}