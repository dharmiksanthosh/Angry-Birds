const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground,pig1,pig2,log1,box3,box4,log2,box5,log3,log4,bg,platform,log5,chain1;

function preload(){

bg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(750,320,70,70);
    box2 = new Box(950,320,70,70);

    ground = new Ground(600,height-20,1200,40);
    platform = new Ground(150,450,300,220);
    pig1 = new Pig(850,320);
    log1 = new Log(850,270, 275, PI/2)

    box3 = new Box(750,250,70,70);
    box4 = new Box(950,250,70,70);
    pig2 = new Pig(850,250);
    log2 = new Log(850,220, 275,PI/2);

    box5 = new Box(850,180,70,70);
    log3 = new Log(950,120, 150,-PI/7);
    log4 = new Log(750,120, 152,PI/7);

    bird = new Bird(200,100);

    // log5 = new Log(200,100,100,PI/2);

    chain1 = new Chain(bird.body,{x:200,y:100});
}

function draw(){
    background(bg);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    platform.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();

    // log5.display();

    chain1.display();
}
function mouseDragged(){

    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){

    chain1.fly();
}  