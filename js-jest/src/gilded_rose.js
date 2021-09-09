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

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  _updateNormalItem(index) {
    if (this.items[index].sellIn >0){
      this.items[index].quality -= 1


      if(this.items[index].quality < 0){
        this.items[index].quality = 0
      }

      return this.items[index]

    } else{
      this.items[index].quality -= 2

      if(this.items[index].quality < 0){
        this.items[index].quality = 0

      }

      return this.items[index]
    }
  }

  _updateConjuredItem(index) {
    if (this.items[index].sellIn >0){
      this.items[index].quality -= 2


      if(this.items[index].quality < 0){
        this.items[index].quality = 0
      }

      return this.items[index]

    } else{
      this.items[index].quality -= 4

      if(this.items[index].quality < 0){
        this.items[index].quality = 0

      }

      return this.items[index]
    }
  }

  _updateAgedBrie(index){
    if (this.items[index].sellIn >=0){
      this.items[index].quality += 1

      if(this.items[index].quality > 50){
        this.items[index].quality = 50
      }

      return this.items[index]

    } else{
      this.items[index].quality += 2

      if (this.items[index].quality > 50){
        this.items[index].quality = 50
      }

      return this.items[index]
    }
  }

  _updateLegendaryItem(index){
    this.items[index].sellIn = 0

    if(this.items[index].quality > 50){
      this.items[index].quality = 50
    }

    return this.items[index]
  }

  _updateConcertTickets(index){
    const sellBy = this.items[index].sellIn
    switch(true){
      case (sellBy <= 0): 
        this.items[index].quality = 0
        break

      case (sellBy > 0 && sellBy <= 5):
        this.items[index].quality += 3
        if (this.items[index].quality > 50){
          this.items[index].quality = 50
        }
        break

      case (sellBy > 5 && sellBy <= 10):
        this.items[index].quality +=2
        if (this.items[index].quality > 50){
          this.items[index].quality = 50
        }
        break

      case (sellBy > 10):
        this.items[index].quality += 1
        if (this.items[index].quality > 50){
          this.items[index].quality = 50
        }
        break
    }
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const itemName = this.items[i].name

      switch(true){
        case (itemName === 'Backstage passes to a TAFKAL80ETC concert'):
          this._updateConcertTickets(i)
          break

        case (itemName === "Sulfuras, Hand of Ragnaros"):
          this._updateLegendaryItem(i)
          break

        case (itemName === 'Aged Brie'):
          this._updateAgedBrie(i)
          break

        case (itemName === "Conjured Item"):
          this._updateConjuredItem(i)
          break

        default:
          this._updateNormalItem(i)
          break
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}

// updateQuality() {
//   for (let i = 0; i < this.items.length; i++) {
//     if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//       if (this.items[i].quality > 0) {
//         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//           this.items[i].quality = this.items[i].quality - 1;
//         }
//       }
//     } else {
//       if (this.items[i].quality < 50) {
//         this.items[i].quality = this.items[i].quality + 1;
//         if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
//           if (this.items[i].sellIn < 11) {
//             if (this.items[i].quality < 50) {
//               this.items[i].quality = this.items[i].quality + 1;
//             }
//           }
//           if (this.items[i].sellIn < 6) {
//             if (this.items[i].quality < 50) {
//               this.items[i].quality = this.items[i].quality + 1;
//             }
//           }
//         }
//       }
//     }
//     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//       this.items[i].sellIn = this.items[i].sellIn - 1;
//     }
//     if (this.items[i].sellIn < 0) {
//       if (this.items[i].name != 'Aged Brie') {
//         if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//           if (this.items[i].quality > 0) {
//             if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//               this.items[i].quality = this.items[i].quality - 1;
//             }
//           }
//         } else {
//           this.items[i].quality = this.items[i].quality - this.items[i].quality;
//         }
//       } else {
//         if (this.items[i].quality < 50) {
//           this.items[i].quality = this.items[i].quality + 1;
//         }
//       }
//     }
//   }

//   return this.items;
// }
// }
