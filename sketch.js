var car, wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(400, 200, 50, 50);
  wall = createSprite(1300,200,60,200);
  wall.shapeColor = "blue";
  car.velocityX = 10;
}

function draw() {
  background(255,400,255);  
  if(wall.x - car.x < (wall.width + car.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509
    if(deformation>180){
      car.shapeColor = "red";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = "yellow";
    }
    if(deformation<100){
      car.shapeColor = "green";
    }
  }
  drawSprites();
}