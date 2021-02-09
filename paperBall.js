class paperBall{
    constructor(x,y,r){
    
    var options= {
       isStatic:false,
       'restitution':0.3,
      'friction':0.5,
       'density':0.3,
      

    }
    this.body = Bodies.circle(x,y,r,options);
    this.r=r;
    this.Image = loadImage("paper.png");
    World.add(world,this.body);
        }

display(){
imageMode(CENTER)
image(this.Image,this.body.position.x,this.body.position.y,this.r,this.r);
}
}