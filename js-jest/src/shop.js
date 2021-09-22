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
    Shop
}