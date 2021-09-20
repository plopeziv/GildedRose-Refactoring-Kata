const {Item} = require("../src/gilded_rose")

class AgedBrie extends Item {
    constructor(name, sellIn, quality){
      super(name, sellIn, quality)
    }
  
    updateItem(){
      if (this.sellIn >=0){
        this.quality += 1
  
        if(this.quality > 50){
          this.quality = 50
        }
      } else{
        this.quality += 2
  
        if (this.quality > 50){
          this.quality = 50
        }
      }
    }
  
}

module.exports ={
    AgedBrie
}
