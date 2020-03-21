const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var shooter;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground= new Ground(600,height,1200,20);
    shooter = new Tanker(30,360,40);
}
function draw() {
    // Remember to update the Matter Engine and set the background.
    background("cyan");
    Engine.update(engine);
    
    ground.display();
    shooter.display();

    }
    
    
    function keyReleased() {
        // Call the shoot method for the cannon.
    }
 