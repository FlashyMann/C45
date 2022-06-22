var animal, animal_img
var hunter, hunter_img
var bullet, bullet_img
var forest, forest_img

function preload() {
  animal_img=loadImage("./assets/deer.png");
  bullet_img=loadImage("./assets/bullet.webp");
  hunter_img=loadImage('./assets/hunter.png');
  forest_img=loadImage("./assets/forest.png");
}

function setup() {
createCanvas(windowWidth,windowHeight);

forest=createSprite(displayWidth/2-0,displayHeight/2-40,5,5)
forest.addImage(forest_img)
forest.scale=1.4999


animal=createSprite(700,100,30,30);
animal.addImage(animal_img);
animal.scale=0.2

hunter=createSprite(700,650,10,10);
hunter.addImage(hunter_img);
hunter.scale=0.8

bullet=createSprite(700,400,5,5);
bullet.addImage(bullet_img);
bullet.scale=0.02

}

function draw() {

  background("white")

drawSprites()
}
