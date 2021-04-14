class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('dog food2.png');
    }

   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }

   getFedTime(lastFed){
     this.lastFed=lastFed;
   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }
    
    deductFoodD()
    {
      database.ref("/").update({
        Food : this.foodStock
      });
      
    }

   readFeedTime()
  {
    var FeedTimeRef = database.ref("FeedTime");
    FeedTimeRef.on("value", function(data)
    {
      lastFed = data.val();
      console.log(lastFed)
    })
  }

  updateFeedTime()
  {
    database.ref('/').update({
      FeedTime :hour()
    })
  }
  
  

    getFoodStock(){
      return this.foodStock;
    }

    display(){
      var x=90,y=60;
      
      imageMode(CENTER);
      image(this.image,770,220,70,70);
      
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%7==0){
            x=80;
            y=y+70;
          }
          image(this.image,x,y,60,60);
          x=x+80;
        }
      }
    }
}
