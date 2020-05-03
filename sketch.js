const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,580,1200,50);

    box1 = new Box(650,530,50,50);
    box2 = new Box(850,530,50,50);
    

    pig1 = new Pig(750,530);

    log1 = new Log(750,510,300,PI);

    box3 = new Box(650,490,50,50);
    box4 = new Box(850,490,50,50);
    box5 = new Box(750,450,50,50);
    
    pig2 = new Pig(750,490);
    bird = new Bird(250,300);

    log2 = new Log(750,470,300,PI);
    log3 = new Log(700,450,100,-PI/3);
    log4 = new Log(800,450,100,PI/3);

}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
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
}