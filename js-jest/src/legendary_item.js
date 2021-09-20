const {Item} = require("../src/gilded_rose")

class LegendaryItem extends Item {
    constructor(name, sellIn, quality){
      super(name, sellIn, quality)
    }
  
    updateItem(){
      this.sellIn = 0      
    }
}

module.exports ={
    LegendaryItem
}