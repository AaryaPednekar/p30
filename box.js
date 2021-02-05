class Box {
  constructor(x,y,width,height)  {
    var options={
        isStatic:false
    }
    this.width = width
    this.height = height
    this.body = Bodies.rectangle(x,y,width,height,options)
    

    World.add(world,this.body)

}
display()  {
     if(this.body.speed < 4){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,30,40);
      pop();
      
      }
    
      else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     pop();
      }
    }
}