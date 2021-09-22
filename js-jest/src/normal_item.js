const {Item} = require("../src/gilded_rose")

class NormalItem extends Item {
    constructor(name, sellIn, quality){
      super(name, sellIn, quality)
    }
  
    updateItem(){
      if (this.sellIn >0){
        this.quality -= 1
  
        if(this.quality < 0){
          this.quality = 0
        }
      } else{
        this.quality -= 2
  
        if(this.quality < 0){
          this.quality = 0
        }
      }
    }
  }

module.exports ={
    NormalItem
}