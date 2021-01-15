var bgImg
var cat,catImg
var mouse,mouseImg

function preload() {
    
 bgImg=loadImage("images/garden.png");
 catImg2=loadImage("images/tomOne.png");
 catImg=loadAnimation("images/tomTwo.png","images/tomThree.png");
 mouseImg2=loadImage("Images/jerryOne.png");
 mouseImg=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
 mouseImg3=loadImage("images/jerryFour.png");
 catImg3=loadImage("images/tomFour.png");

}

function setup(){
    createCanvas(1000,800);
    
    cat=createSprite(750,450);
    cat.addImage("tomWalking",catImg2);
    cat.scale=0.1
    
    mouse=createSprite(200,450);
 mouse.addImage("jerryWalking",mouseImg2);
 mouse.scale=0.1;
}

function draw() {
    background(bgImg);

   if(cat.isTouching(mouse)){
     cat.velocityX=0;
     cat.addImage("tomStop",catImg3)
     cat.changeImage("tomStop")

     mouse.addImage("jerryStop",mouseImg3)
     mouse.changeImage("jerryStop")
   }
   cat.setCollider("rectangle",80,80,240,260)
  // cat.debug=true;
    
   mouse.setCollider("circle",0,0,400)
  // mouse.debug=true;
    keyPressed();
    drawSprites();
}


function keyPressed(){

    if(keyDown(LEFT_ARROW)) {
        cat.velocityX=-5;
        cat.addAnimation("tomwalk",catImg);
        cat.changeAnimation("tomwalk")
    
        mouse.addAnimation("jerry",mouseImg)
        mouse.changeAnimation("jerry")
      }

}
