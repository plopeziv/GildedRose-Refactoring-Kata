const {Shop, Item} = require("../src/gilded_rose");

test("First Normal Item Test ", function() {
  const gildedRose = new Shop([
    new Item("+5 Dexterity Vest", 10, 20),
    new Item("Elixir of the Mongoose", 5, 7)])

  gildedRose.updateQuality()

  expect(gildedRose.items).toBeTruthy()
})

test("Normal Item Degredation Test", function(){
  // Step 1
  const gildedRose = new Shop([
    new Item("+5 Dexterity Vest", 0, 20),
    new Item("Elixir of the Mongoose", 5, 7)])

  const expiredOriginalQuality = gildedRose.items[0].quality
  const goodOriginalQuality = gildedRose.items[1].quality

  // Step 2
  gildedRose.updateQuality()

  // Step 3
  const expiredDegridationValue = gildedRose.items[0].quality - expiredOriginalQuality
  const goodDegridationValue = gildedRose.items[1].quality - goodOriginalQuality

  expect(expiredDegridationValue).toBe(-2)
  expect(goodDegridationValue).toBe(-1)
})

test("Normal Item Lower Quality Bound", function(){
  // Step 1
  const gildedRose = new Shop([
    new Item("Elixir of the Mongoose", -1, 1),
    new Item("Elixir of the Mongoose", 4, 0),
  ])

  // Step 2
  gildedRose.updateQuality()

  // Step 3
  const expiredDegridationValue = gildedRose.items[0].quality
  const goodDegridationValue = gildedRose.items[1].quality


  expect(expiredDegridationValue).toBe(0)
  expect(goodDegridationValue).toBe(0)

})

test("Conjured Item Degredation Test", function(){
  // Step 1
  const gildedRose = new Shop([
    new Item("Conjured Item", 0, 20),
    new Item("Conjured Item", 5, 7)])

  const expiredOriginalQuality = gildedRose.items[0].quality
  const goodOriginalQuality = gildedRose.items[1].quality

  // Step 2
  gildedRose.updateQuality()

  // Step 3
  const expiredDegridationValue = gildedRose.items[0].quality - expiredOriginalQuality
  const goodDegridationValue = gildedRose.items[1].quality - goodOriginalQuality

  expect(expiredDegridationValue).toBe(-4)
  expect(goodDegridationValue).toBe(-2)
})

test("Conjured Item Lower Quality Bound", function(){
  // Step 1
  const gildedRose = new Shop([
    new Item("Conjured Item", -1, 1),
    new Item("Conjured Item", 4, 0),
  ])

  // Step 2
  gildedRose.updateQuality()

  // Step 3
  const expiredDegridationValue = gildedRose.items[0].quality
  const goodDegridationValue = gildedRose.items[1].quality


  expect(expiredDegridationValue).toBe(0)
  expect(goodDegridationValue).toBe(0)

})

test("Aged Brie Appreciation Test", function(){
  // Step 1
  const gildedRose = new Shop([
    new Item("Aged Brie", 2, 0),
    new Item("Aged Brie", -4, 0)])

  const goodOriginalQuality = gildedRose.items[0].quality
  const expiredOriginalQuality = gildedRose.items[1].quality

  // Step 2
  gildedRose.updateQuality()

  // Step 3
  const goodAppreciationValue = gildedRose.items[0].quality - goodOriginalQuality
  const expiredAppreciationValue = gildedRose.items[1].quality - expiredOriginalQuality

  expect(expiredAppreciationValue).toBe(2)
  expect(goodAppreciationValue).toBe(1) 
})

test("Appreciating Item Upper Quality Bound", function(){
  // Step 1
  const gildedRose = new Shop([
    new Item("Aged Brie", -1, 49),
    new Item("Aged Brie", 4, 50)
  ])

  // Step 2
  gildedRose.updateQuality()

  // Step 3
  const expiredAppreciationValue = gildedRose.items[0].quality
  const goodAppreciationValue = gildedRose.items[1].quality

  expect(expiredAppreciationValue).toBe(50)
  expect(goodAppreciationValue).toBe(50)
})

test("Legendary Item Quality Retention", function(){
  // Setup Test Step 1
  const gildedRose = new Shop([
    new Item("Sulfuras, Hand of Ragnaros", -1, 50),
    new Item("Sulfuras, Hand of Ragnaros", 0, 50),
    new Item("Sulfuras, Hand of Ragnaros", 1, 80)
  ])

  // Initiate Test Step 2
  gildedRose.updateQuality()

  // Initiate Test Step 3
  expect(gildedRose.items[0].quality).toBe(50)
  expect(gildedRose.items[1].quality).toBe(50)
  expect(gildedRose.items[2].quality).toBe(50)
})

test("Concert Tickets Appreciation Test", function(){
  // Setup Test Step 1
  const gildedRose = new Shop([
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 30),
    new Item("Backstage passes to a TAFKAL80ETC concert", 9, 30),
    new Item("Backstage passes to a TAFKAL80ETC concert", 4, 30),
    new Item("Backstage passes to a TAFKAL80ETC concert", 0, 30)
  ])

  const farConcertOriginalQuality = gildedRose.items[0].quality
  const upcomingConcertOriginalQuality = gildedRose.items[1].quality
  const closeConcertOriginalQuality = gildedRose.items[2].quality

  // Test Step 2
  gildedRose.updateQuality()

  // Test Step 3
  const farConcertValue = gildedRose.items[0].quality - farConcertOriginalQuality
  const upcomingConcertValue = gildedRose.items[1].quality - upcomingConcertOriginalQuality
  const closeConcertValue = gildedRose.items[2].quality - closeConcertOriginalQuality

  expect(farConcertValue).toBe(1)
  expect(upcomingConcertValue).toBe(2)
  expect(closeConcertValue).toBe(3)
  expect(gildedRose.items[3].quality).toBe(0)
})

test("Concert Tickets Upper Bound Test", function(){
  // Step 1
  const gildedRose = new Shop([
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 50),
    new Item("Backstage passes to a TAFKAL80ETC concert", 9, 49),
    new Item("Backstage passes to a TAFKAL80ETC concert", 4, 48),
  ])

  // Step 2
  gildedRose.updateQuality()
  
  // Step 3
  const farConcertQuality = gildedRose.items[0].quality
  const upcomingConcertQuality = gildedRose.items[1].quality
  const closeConcertQuality = gildedRose.items[2].quality

  expect(farConcertQuality).toBe(50)
  expect(upcomingConcertQuality).toBe(50)
  expect(closeConcertQuality).toBe(50)
})

test("Throws error if Item quality is out of range", function(){
  try {
    new Item("Name", 3, -1)
    expect(true).toBe(false);
  } catch (error) {
    expect(error.message).toEqual("Quality out of range")
  }
})

// Updated Functions for Refactored Code

test("Normal Item Update", function(){
  const gildedRose = new Shop([
    new Item("Regular item", 4, 20),
    new Item("Regular item", -2, 7),
    new Item("Regular Item", 2, 0),
    new Item("Regular Item", -4, 1)])

  goodItemOriginalQuality = gildedRose.items[0].quality
  expiredItemOriginalQuality = gildedRose.items[1].quality

  newGoodItem = gildedRose._updateNormalItem(0)
  newExpiredItem = gildedRose._updateNormalItem(1)
  overshotItemGood = gildedRose._updateNormalItem(2)
  overshotExpired = gildedRose._updateNormalItem(3)

  expect(newGoodItem.quality - goodItemOriginalQuality).toBe(-1)
  expect(newExpiredItem.quality - expiredItemOriginalQuality).toBe(-2)
  expect(overshotItemGood.quality).toBe(0)
  expect(overshotExpired.quality).toBe(0)
})

test("Conjured Item Update", function(){
  const gildedRose = new Shop([
    new Item("Conjured Item", 4, 20),
    new Item("Conjured Item", -2, 7),
    new Item("Conjured Item", 2, 0),
    new Item("Conjured Item", -4, 1)])

  goodItemOriginalQuality = gildedRose.items[0].quality
  expiredItemOriginalQuality = gildedRose.items[1].quality

  newGoodItem = gildedRose._updateConjuredItem(0)
  newExpiredItem = gildedRose._updateConjuredItem(1)
  overshotItemGood = gildedRose._updateConjuredItem(2)
  overshotExpired = gildedRose._updateConjuredItem(3)

  expect(newGoodItem.quality - goodItemOriginalQuality).toBe(-2)
  expect(newExpiredItem.quality - expiredItemOriginalQuality).toBe(-4)
  expect(overshotItemGood.quality).toBe(0)
  expect(overshotExpired.quality).toBe(0)
})

test("Aged Brie Item Update", function(){
  const gildedRose = new Shop([
    new Item("Aged Brie", 4, 20),
    new Item("Aged Brie", -2, 7),
    new Item("Aged Brie", 2, 50),
    new Item("Aged Brie", -2, 49)])

  goodItemOriginalQuality = gildedRose.items[0].quality
  expiredItemOriginalQuality = gildedRose.items[1].quality

  newGoodItem = gildedRose._updateAgedBrie(0)
  newExpiredItem = gildedRose._updateAgedBrie(1)
  overshotItemGood = gildedRose._updateAgedBrie(2)
  overshotExpired = gildedRose._updateAgedBrie(3)
  

  expect(newGoodItem.quality - goodItemOriginalQuality).toBe(1)
  expect(newExpiredItem.quality - expiredItemOriginalQuality).toBe(2)
  expect(overshotItemGood.quality).toBe(50)
  expect(overshotExpired.quality).toBe(50)
})

test("Legendary Item Update", function(){
  const gildedRose = new Shop([
    new Item("Sulfuras, Hand of Ragnaros", -4, 80)])
  
  gildedRose._updateLegendaryItem(0)

  expect(gildedRose.items[0].sellIn).toBe(0)
  expect(gildedRose.items[0].quality).toBe(50)
})

test("Concert Tickets Update", function(){
  const gildedRose = new Shop([
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 30),
    new Item("Backstage passes to a TAFKAL80ETC concert", 9, 30),
    new Item("Backstage passes to a TAFKAL80ETC concert", 4, 30),
    new Item("Backstage passes to a TAFKAL80ETC concert", 0, 30)
  ])

  const farConcertOriginalQuality = gildedRose.items[0].quality
  const upcomingConcertOriginalQuality = gildedRose.items[1].quality
  const closeConcertOriginalQuality = gildedRose.items[2].quality

  gildedRose._updateConcertTickets(0)
  gildedRose._updateConcertTickets(1)
  gildedRose._updateConcertTickets(2)
  gildedRose._updateConcertTickets(3)

  const farConcertValue = gildedRose.items[0].quality - farConcertOriginalQuality
  const upcomingConcertValue = gildedRose.items[1].quality - upcomingConcertOriginalQuality
  const closeConcertValue = gildedRose.items[2].quality - closeConcertOriginalQuality

  expect(farConcertValue).toBe(1)
  console.log(gildedRose.items[3])
  expect(upcomingConcertValue).toBe(2)
  expect(closeConcertValue).toBe(3)
  expect(gildedRose.items[3].quality).toBe(0)
})