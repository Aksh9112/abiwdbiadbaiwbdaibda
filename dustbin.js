class Dustbin{
    constructor(x,y,w,h){
     var option = {
        isStatic: true,
        "restitution":0,
        "friction":1,
        "density":0.1
     }
     this.body= Bodies.rectangle(x,y,w,h,option)
     this.w=w;
     this.h=h;

     World.add(world,this.body)
    }
    display(){
        rectMode(CENTER);
        fill(255)
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }
}