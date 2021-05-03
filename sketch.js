var dog , happyDog , database , foodS 

function preload(){
dog=loadImage("images/dogImg.png");
happyDog=loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
	createCanvas(500, 700);
  dog1=createSprite(250,450,6,10);
  dog1.addImage(dog);
  dog1.scale=0.4
  var foodStock=database.ref('food');
  foodStock.on("value",readStock);
}

function draw() {  
    background(46, 139, 87)
    dog1.display();

    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog1.addImage(happyDog);
    }

    if(keyWentDown(80)){
      foodS=foodS+1;
    }
    
    fill('white');
    text("Food Stocks : "+foodS,250,300)
    text("Press UP ARROW KEY to feed Drago Milk!",200,30);
    drawSprites();
  }
    function readStock(data){
      foodS=data.val();
    }
    // Function to read value in DB 
    function writeStock(x){
      if(x<=0){
        x=0
      }else{
        x=x+1
      }
      database.ref('/').update({
        food : x
      })
    }
