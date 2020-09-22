class Chain {
    constructor(bodyA,pointB){

        var options = {

            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            lenght: 200
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        this.pointB = pointB;
        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){

        image(this.sling1,200,142.5);
        image(this.sling2,172,140);

    if (this.chain.bodyA){

        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        push();

    if(pointA.x<220){
        strokeWeight(7);
        stroke(48,22,8);
        line(pointA.x-35,pointA.y,pointB.x-10,pointB.y+10);
        line(pointA.x-35,pointA.y,pointB.x+20,pointB.y-5);
        image(this.sling3,pointA.x-40,pointA.y-10,20,30);
    }else{

        strokeWeight(5);
        stroke(48,22,8);
        line(pointA.x+35,pointA.y,pointB.x-10,pointB.y+10);
        line(pointA.x+35,pointA.y-5,pointB.x+30,pointB.y-5);
        image(this.sling3,pointA.x+30,pointA.y-10,10,30);
    }
        pop();
      }
    }
    fly(){

        this.chain.bodyA = null;
    }
} 
