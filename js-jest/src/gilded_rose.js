class Item {
  constructor(name, sellIn, quality){
    if (quality < 0) {
      throw Error("Quality out of range");
    }
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

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

class LegendaryItem extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }

  updateItem(){
    this.sellIn = 0

    if(this.quality > 50){
      this.quality = 50
    }
  }
}

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

class ConjuredItem extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }

  updateItem(){
    if (this.sellIn >0){
      this.quality -= 2

      if(this.quality < 0){
        this.quality = 0
      }
    } else{
      this.quality -= 4

      if(this.quality < 0){
        this.quality = 0
      }
    }
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {
      item.updateItem()
      item.sellIn -= 1})
  }
}

module.exports = {
  Item,
  Shop,
  NormalItem,
  ConjuredItem,
  AgedBrie,
  LegendaryItem,
  ConcertTickets
}