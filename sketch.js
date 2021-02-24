
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
     loadImage("sprite_0.png","sprite_1.png","sprite_2.png")
       loadImage("sprite_3.png","sprite_4.png","sprite_5.png")
         loadImage("sprite_6.png","sprite_7.png","sprite_8.png");    
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  monkey_running= loadImage ("monkey_running.png");
   
 
}



function mysetup() {
  
var monkey= createSprite(60,340,20,20);
monkey.setAnimation("monkey_running");
monkey.scale=0.1;

  
}


function draw() {

drawSprites();
  
}






