var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;
var feed;
var lastFed ;
var feedTheDog;
var bg;
//var deductFoodD;

//create feed and lastFed variable here


function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
bg = loadImage(" bg.jpg");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(860,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //create feed the dog button here
 fill(60);
  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
  addFood.shapeColor = "pink"

  feedTheDog = createButton("Feed The Dog");
  feedTheDog.position(650,95);
  feedTheDog.mousePressed(feedDog);



}

function draw() {
  background(bg);
  foodObj.display();
  foodObj.readFeedTime();
  

  //write code to read fedtime value from the database 
  
 
  //write code to display text lastFed time here
textSize(25);
textFont("SHOWCARD GOTHIC")
fill("black");
stroke("pink");
strokeWeight(3)
  text("Last Fed :" + lastFed, 150, 35);

  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);

}


function feedDog(){
  dog.addImage(happyDog);
  foodObj.deductFood();
  foodObj.deductFoodD();
  foodObj.updateFeedTime();
  
  


  //write code here to update food stock and last fed time

}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
   })
  
}
