const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var thunder, thunder1, thunder2, thunder3, thuder4;
var umbrella;
var maxDrops = 100;
var drops = [];
var rand;
var thunderCreatedFrame = 0;

function preload(){
    thunder1 = loadImage("Thunderbolt1.png");
    thunder2 = loadImage("Thunderbolt2.png");
    thunder3 = loadImage("Thunderbolt3.png");
    thunder4 = loadImage("Thunderbolt4.png");   
}

function setup(){
    var canvas = createCanvas(400,650);
   
    engine = Engine.create();
    world = engine.world;
    
    umbrella = new Umbrella(200,350);

    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }
    }
  
    
}

function draw(){
    
    background('black');
    Engine.update(engine);

      rand = Math.round(random(1,4));
      if(frameCount%180===0){
        sound.play();
          thunderCreatedFrame=frameCount;
          thunder = createSprite(random(10,370), random(10,30), 10, 10);
          switch(rand){
              case 1: thunder.addImage(thunder1);
              break;
              case 2: thunder.addImage(thunder2);
              break; 
              case 3: thunder.addImage(thunder3);
              break;
              case 4: thunder.addImage(thunder4);
              break;
              default: break;
          }
          thunder.scale = random(0.3,0.6)
      }

      if(thunderCreatedFrame + 10 === frameCount && thunder){
          thunder.destroy();
      }

      umbrella.display();

      for(var i = 0; i<maxDrops; i++){
          drops[i].display();
          drops[i].changePosition();
      }
      drawSprites();
}   

