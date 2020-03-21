class Tanker {
  constructor(x, y, radius) {
      var options = {
      isStatic: true
     }
     this.body=Bodies.circle(x , y , radius);
     this.radius = radius ; 
    }

    display(){

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("yellow");
      fill("red");
      ellipse(0,0,this.radius);
      rect(0,20, 30, 10);
      rectMode(CORNER);
      rect(0,0,30,10);
      pop();
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look

    }
}
