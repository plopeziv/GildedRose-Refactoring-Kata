const {Shop} = require("../src/shop");
const {NormalItem} = require("../src/normal_item")

test("SellIn Degredation Test", function() {
  const gildedRose = new Shop([
      new NormalItem("Test item", 12, 2)
    ])

  const originalDate = gildedRose.items[0].sellIn

  gildedRose.updateQuality()

  expect(gildedRose.items[0].sellIn - originalDate).toBe(-1)
})

test("Pass array", function(){
  // Update to Items 
    const testArray = ["a", "b", "c"]
    const gildedRose = new Shop(testArray)

    expect(gildedRose.items).toBe(testArray)
})