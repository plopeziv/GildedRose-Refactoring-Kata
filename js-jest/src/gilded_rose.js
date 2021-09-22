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

module.exports = {
  Item
}