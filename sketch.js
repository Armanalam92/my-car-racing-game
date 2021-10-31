var car,carImage;

var background2,background2Image;

var boundary1,boundary2;

var ground,groundImage;





function preload(){
  flagImage = loadImage("flag.png");
  background2Image = loadImage("platform.png");
  carImage = loadImage("Formula.png");
  groundImage = loadImage("sky.png");
  
}



function setup() {
  createCanvas(600, 400);

   flag = createSprite(500,100,50,50);
   flag.addImage(flagImage);

  ground = createSprite(200,100,600,400);
  ground.addImage(groundImage);

  
  

  background2 = createSprite( 300, 370,600,10);
  background2.addImage(background2Image);

  boundary1 = createSprite(710,200,10,600);
  boundary2 = createSprite(10,200,10,600);



  car = createSprite(70,290,50,10);
  car.addImage(carImage);
  car.scale= 0.3;
  

  boundary2.visible = false;
  boundary1.visible = false;

 
}

function draw() {
 background(192);
 
 
 if (keyDown("right")) {
   car.x=car.x+4;
 }

 if (keyDown("left")) {
  car.x=car.x-4;
}
 


if (car.isTouching(boundary1)){
  flag = createSprite(550,350,50,50);
   flag.addImage(flagImage);
   flag.scale=0.1;
  background2 = createSprite( 300, 370,600,10);
  background2.addImage(background2Image);
  background.scroll;
  car = createSprite(70,290,50,10);
  car.addImage(carImage);
  car.scale= 0.3;
  car.lifetime=700;
}

  drawSprites();
}


