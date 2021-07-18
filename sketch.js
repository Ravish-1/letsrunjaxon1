var path,pathImage
var jax,jaxImage
var leftBoundary,rightBoundary,edges;

function preload(){
  //pre-load images
  pathImage=loadImage('path.png')
jaxImage=loadAnimation('Runner-1.png','Runner-2.png')

}

function setup(){
  createCanvas(600,600);
  //create sprites here
  path=createSprite(300,300,40,40)
  path.addImage('path',pathImage)
path.scale=1.2
path.velocityY=4



jax=createSprite(0,200,20,20)
jax.addAnimation('jax',jaxImage)
jax.scale=0.1
 
leftBoundary=createSprite(0,0,280,800)
leftBoundary.visible=false;

rightBoundary=createSprite(560,0,200,800)
rightBoundary.visible=false;

edges=createEdgeSprites();
}

function draw() {
  background('white');
  jax.x=World.mouseX;


if(path.y>450){
  path.y=height/2
}
jax.collide(leftBoundary);
jax.collide(rightBoundary);
jax.collide(edges[3])
drawSprites()
}
