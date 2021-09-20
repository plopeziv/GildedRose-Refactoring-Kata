const {Item} = require("../src/gilded_rose")

class ConcertTickets extends Item {
    constructor(name,sellIn, quality){
      super(name,sellIn, quality)
    }
  
    updateItem(){
      const sellBy = this.sellIn
  
      switch(true){
        case (sellBy <= 0): 
          this.quality = 0
          break
  
        case (sellBy > 0 && sellBy <= 5):
          this.quality += 3
          if (this.quality > 50){
            this.quality = 50
          }
          break
  
        case (sellBy > 5 && sellBy <= 10):
          this.quality +=2
          if (this.quality > 50){
            this.quality = 50
          }
          break
  
        case (sellBy > 10):
          this.quality += 1
          if (this.quality > 50){
            this.quality = 50
          }
          break
      }
    }
}

module.exports ={
    ConcertTickets
}