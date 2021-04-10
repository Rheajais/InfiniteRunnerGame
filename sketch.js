var car, carImg,track,trackImg;

function preload(){
carImg=loadImage('images/car.png');
trackImg=loadImage('images/track.jpg');
}

function setup(){
    createCanvas(1000,1000);
    car=createSprite(700,500);
    car.addImage(carImg);

    track=createSprite(700,1000);
    track.addImage(trackImg)

}

function draw(){
    drawSprites();
}