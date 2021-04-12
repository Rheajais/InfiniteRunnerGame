var car, carImg,track,trackImg;

function preload(){
carImg=loadImage('images/car.png');
trackImg=loadImage('images/track.jpg');
}

function setup(){
    createCanvas(1000,1000);
   track=createSprite(700,1000);
   track.addImage(trackImg);

   car=createSprite(700,900);
    car.addImage(carImg);

}

function draw(){

    car.velocityY=0;

   if(keyDown(UP_ARROW)){
       car.velocityY=10;
    camera.position.x = 500;
    camera.position.y = car.y;
   }

    drawSprites();
}