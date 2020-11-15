class Paper {
    constructor(x, y, r) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.6
        }
        this.r = r;
        this.body = Matter.Bodies.circle(x, y, r/2, options);
        this.body.collisionFilter.group = 1;
        World.add(world, this.body);
    }

    display() {
 /*       push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        pop();
*/ }
}

class Ground {
    constructor(x, y) {
        var options = {
            isStatic:true
        }
        this.width = 1000;
        this.thickness = 30;
        this.body = Bodies.rectangle(x, y, this.width, this.thickness, options);
        this.body.collisionFilter.group = 1;
        World.add(world, this.body);
    } 
        
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("black");
        fill("black");
        rect(0, 0, this.width, this.thickness);
        pop();
    }    
}