class SlingShot {
    constructor(bodyX,pointY){
        var option ={
            bodyA:bodyX,
            pointB :pointY,
            stiffnes:0.04,
            lenght:50
            
        }
        this.chain =Constraint.create (option)
        this.pointB=pointY
        World.add(world,this.chain)
    }
    fly(){
       this.chain.bodyA=null 
    }
    display() {
        if (this.chain.bodyA){
     var pointA= this.chain.bodyA.position
     var pointB=this.pointB
     strokeWeight(4);
     line(pointA.x,pointA.y,pointB.x,pointB.y)

    }
    }    
}
