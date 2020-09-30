var PLAY=1;
var END=0;
var gameState=PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(100,400,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
  
  ground=createSprite(300,500,1400,5);
  ground.velocityX=-2;
  
  FoodGroup=new Group() ;
  obstacleGroup=new Group();
  
}


function draw() {
  background("white");
  text("score="+score,500,50);
  
  
  if (gameState===PLAY){
    if (ground.x<0){
      ground.x=100;    
    }
   if(keyDown("space")){
     monkey.velocityY=-12;
   }
    monkey.velocityY=monkey.velocityY+0.8;
    createBanana();
    createObstacle();
    if(monkey.isTouching(FoodGroup)){
      FoodGroup.destroyEach();
      score=score+2;    
       }
    if(monkey.isTouching(obstacleGroup)){
       gameState=END;
       
       
       }
  }
if (gameState===END){
  ground.velocityX=0;
  obstacleGroup.setVelocityXEach(0);
  FoodGroup.setVelocityXEach(0);
  obstacleGroup.setLifetimeEach(-1);
  FoodGroup.setLifetimeEach(-1);
}
  
  monkey.collide(ground);
  
drawSprites();
  
}
function createBanana(){
  if(frameCount%150===0){
    var banana=createSprite(600,50,10,10);
    banana.velocityX=-2;
    banana.lifetime=300;
    banana.y=Math.round(random(50,200));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    FoodGroup.add(banana);
    banana.debug=false;
    
  }
  
}
function createObstacle(){
  if(frameCount%200===0){
    var obstacle=createSprite(600,470,10,10);
    obstacle.velocityX=-2;
    obstacle.lifetime=300;
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.2;
    obstacleGroup.add(obstacle);
    
  }
  
}




