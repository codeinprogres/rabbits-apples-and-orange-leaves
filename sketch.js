var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png"); 
  orangeLeafImg = loadImage("orange.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.x = 200;
rabbit.y = 350;
}

function createApples(){
  apple = createSprite(random(50,350), 40, 10, 10); 
  apple.addImage(appleImg);
  apple.scale = 0.010;
  apple.lifetime = 90;
  apple.velocityY = 3;
}

function createOrangeLeaves(){
   OrangeLeaf = createSprite(random(50,350), 40, 10, 10)
   OrangeLeaf.addImage(orangeLeafImg);
   OrangeLeaf.scale = 0.05;
   OrangeLeaf.velocityY = 3;
   OrangeLeaf.lifetime = 90;
}


function draw() {
  background(0);
  
var select_sprites = Math.round(random(1,2));

if (frameCount % 80 == 0){
  if(select_sprites == 1){
    createApples();
  }
  else{
    createOrangeLeaves();
  }
}

  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  createOrangeLeaves();
  createApples();
  drawSprites();
}