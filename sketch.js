var path,pathImage
var jax,jaxImage

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
path.scale=1.5
path.velocityY=4



jax=createSprite(300,300,20,20)
jax.addAnimation('jax',jaxImage)
jax.scale=0.1
  
}

function draw() {
  background('white');
drawSprites()
if(path.y>700){
  path.y=height/2
}
}
