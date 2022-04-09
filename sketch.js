var myEngine,myWorld,ground,sun;

function setup() {
  createCanvas(400,400);

  myEngine=Matter.Engine.create();
  myWorld=myEngine.world;

  var options={
    isStatic:true
  }
  ground=Matter.Bodies.rectangle(200,380,400,40,options);
  Matter.World.add(myWorld,ground);

  sun=Matter.Bodies.circle(50,50,30,options);
  Matter.World.add(myWorld,sun);
  //console.log(ground);

  var opt={
    restitution:1
  }
  box=Matter.Bodies.rectangle(200,200,20,20,opt)
  Matter.World.add(myWorld,box)
}

function draw() {
  background(0);  
  Matter.Engine.update(myEngine);

  //console.log(ground.position.y);

 fill("red")
 rectMode(CENTER)
 rect(box.position.x,box.position.y,20,20)

  fill("green");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,40);

  fill("orange");
  ellipseMode(RADIUS);
  ellipse(sun.position.x,sun.position.y,30,30);
}