//Create variables here

function preload()
{
  //load images here
  dog1 = loadImage("images/dogImg.png")
  dog2 = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500 , 500);
  dog = createSprite (250 , 250 , 50 , 50)
  dog.addImage (dog1)
  foodstock = database.ref ('food');
  foodstock.on("value , readstock")
}


function draw() {  
backgroud(46, 139, 87)
  drawSprites();

  //add styles here

}



