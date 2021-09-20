const {Item} = require("../src/gilded_rose")

class WackyItem extends Item{
    constructor(name, sellIn, quality){
        super(name, sellIn, quality)
        this.updateCount = 0
    }

    updateItem(){
      if (this.updateCount === 0) {
        this.quality = 50
      } else {
        this.quality = 0
      }
      this.updateCount += 1
    }
}

module.exports ={
    WackyItem
}
