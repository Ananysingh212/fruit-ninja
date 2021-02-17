var PLAY = 1
var END = 0;
var gameState = 1;

var sword , sword_Image ,demogorgon , demogorgon_Image ,fruit , fruit1_Image, fruit2_Image,fruit3_Image , fruit4_Image ;
var gameover_Image,gameover;

function preload(){
   sword_Image = loadImage("sword.png");
   demogorgon_Image = loadImage("alien1.png","alien2.png");
   fruit1_Image = loadImage("fruit1.png");
   fruit2_Image = loadImage("fruit2.png");
   fruit3_Image = loadImage("fruit3.png");
   fruit4_Image = loadImage("fruit4.png");
   gameover_Image = loadImage("gameover.png ")
 
}

function setup() {
  createCanvas(600,400);
  
   sword = createSprite(50,180,20,50);
   sword.scale = 0.7;
  
   
  fruitGroup = new Group ();
  demogorgonGroup = new Group();

   
   score = 0
  
   sword.setCollider("circle",0,0,40);
  sword.debug = false
  
}

function draw(){
  background("lightblue");

  if(gameState === 1){
    fruits();
    demogorgons();
    
     sword.y = World.mouseY
     sword.x = World.mouseX
    
     sword.addAnimation("sword",sword_Image);
    
     if (fruitGroup.isTouching(sword)){
     fruitGroup.destroyEach();
     score= score + 20;
     }
  
   if (demogorgonGroup.isTouching(sword)){
     demogorgonGroup.destroyEach();
     gameState = 0;
     
    }
   
     
   }
  
  
  else if(gameState === 0){
    gameover = createSprite(290,150,10,10);
    gameover.addImage(gameover_Image);
  }
 

   
  
  
   
  
  drawSprites();
  
  textSize(12); 
  fill("blue"); 
  text("score: "+ score,50,20);
}

  function fruits(){
    if(World.frameCount%90=== 0){
      fruit = createSprite(400,200,20,20);
      fruit.scale = 0.2 ;
      r = Math.round(random(1,4));
       if(r==1){
        fruit.addImage(fruit1_Image);
       } else if (r == 2){
        fruit.addImage(fruit2_Image);
       }else if (r == 3){
        fruit.addImage(fruit3_Image);
       }else {
        fruit.addImage(fruit2_Image);
       }
      
       fruit.y = Math.round(random(100,360))
      
       fruit.velocityX= -7;
       fruit.setLifetime = 100;
      
       fruitGroup.add(fruit);
       
      }
  }

     function demogorgons(){
       if(World.frameCount%200=== 0){
        demogorgon = createSprite(200,200,10,10);
        demogorgon.addAnimation("moving",demogorgon_Image);
        demogorgon.y = Math.round(random(100,200));
        demogorgon.velocityX = -8;
        demogorgon.setLifetime = 50;
         
        demogorgonGroup.add(demogorgon);
       }
     }






        