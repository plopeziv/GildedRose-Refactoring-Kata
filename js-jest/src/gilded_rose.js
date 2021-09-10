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
  constructor(sellIn, quality){
    super(sellIn, quality)
    this.name = "Aged Brie"
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
  constructor(sellIn, quality){
    super(sellIn, quality)
    this.name = 'Sulfuras, Hand of Ragnaros'
  }

  updateItem(){
    this.sellIn = 0

    if(this.quality > 50){
      this.quality = 50
    }
  }
}

class ConcertTickets extends Item {
  constructor(sellIn, quality){
    super(sellIn, quality)
    this.name = 'Backstage passes to a TAFKAL80ETC concert'
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
  constructor(sellIn, quality){
    super(sellIn, quality)
    this.name = "Conjured Item"
  }

  updateItem(){
    if (this.sellIn >0){
      this.quality -= 2

      if(this.quality < 0){
        this.quality = 0
      }
    } else{
      this.items[index].quality -= 4

      if(this.items[index].quality < 0){
        this.items[index].quality = 0
      }
    }
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].updateItem()
    }
  }
}

module.exports = {
  Item,
  Shop
}