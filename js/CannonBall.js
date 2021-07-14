class CannonBall{
constructor(x,y){
    this.radius= 40;
    this.image= loadImage("assets/cannonball.png")
    var options= {
        restitution:0.5,
        friction:1,
        density:1,
        isStatic:true
            }
        this.body= Bodies.circle(x,y,this.radius,options)
        World.add(world, this.body)
        }
    display() {
    var angle= this.body.angle
    var pos= this.body.position
    push();
    translate(pos.x, pos.y);
    rotate(angle)
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius)
    pop();
    }
    shoot() {
        //var velocity= p5.Vector;
        Matter.Body.setVelocity(this.body,{x:50,y:-30})
    }
}