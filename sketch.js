var eng,bo,wor,r=0,plat,constraint;
var bg,sling1,sling2,sling3
function preload(){
bg=loadImage("bg.png");
sling1=loadImage("sling1.png");
sling2=loadImage("sling2.png");
sling3=loadImage("sling3.png");
}


function setup(){
  createCanvas(1200,600);
eng=Matter.Engine.create();
wor=eng.world;
bo=Matter.Bodies.rectangle(600,500,1200,10);
plat=Matter.Bodies.rectangle(205,275,70,70);

Matter.World.add(wor,bo);
bo.isStatic=true;
b1=new Box(800,400,90,90);
b2=new Box(1100,400,90,90);
l1=new Log(950,390,387,40);
l2=new Log(950,290,387,40);
b3=new Box(800,300,90,90);
b4=new Box(1100,300,90,90);
bird=new Bird(266,197,75,75);
//950,170

 b5=new Box(950,160,90,90)
 //806,135
 l3=new Log(826,170,40,180)
 //1060,182
l4=new Log(1040,170,40,180);
p1=new Pig(950,442,80,80)
 Matter.Body.setAngle(l3.RigidBody,38);
Matter.Body.setAngle(l4.RigidBody,-38);
l3.RigidBody.friction=0.8;
l4.RigidBody.friction=0.8;
p2=new Pig(946,311,80,80)
constraint=Matter.Constraint.create({
bodyA:bird.RigidBody,
pointB:{
  x:202,
  y:197,
},length:0,stiffness:0.04,

})
Matter.World.add(wor,constraint);
}
function draw(){
  background(bg);
  //console.log(b1.RigidBody.angle);
  Matter.Engine.update(eng);
  bird.RigidBody.position.x=mouseX;
  bird.RigidBody.position.y=mouseY;

  line(202,197,bird.RigidBody.position.x,bird.RigidBody.position.y)
image(sling1,202,172);
image(sling2,175,172);
b1.Display();
b2.Display();
b3.Display();
b4.Display();
l1.Display();
l2.Display();
b5.Display();
l3.Display();
l4.Display();
bird.Display();
p1.Display();
p2.Display();
rectMode(CENTER);
fill("brown");
rect(205,430,341,150)
rect(bo.position.x,bo.position.y,1200,10)
text("x:"+mouseX+"y:"+mouseY,mouseX,mouseY)
}

//202,332