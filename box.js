class Box{
    constructor(a,b,c,d){
this.RigidBody=Matter.Bodies.rectangle(a,b,c,d);
Matter.World.add(wor,this.RigidBody)
this.RigidBody.restitution=0.8;
this.RigidBody.friction=0.3;
this.RigidBody.density=1;
this.w=c;
this.h=d;
this.image=loadImage("wood1.png");
    }
    Display(){
       var angle=this.RigidBody.angle;
       angle=(180/PI)*angle;
       push();
       translate(this.RigidBody.position.x,this.RigidBody.position.y);
       rotate(angle);
       imageMode(CENTER);
        image(this.image,0,0,this.w,this.h)
       // rect(this.RigidBody.position.x,this.RigidBody.position.y,this.w,this.h)
        pop();






        
    }

}
