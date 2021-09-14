const {Shop, Item, NormalItem, ConjuredItem, AgedBrie,
  LegendaryItem, ConcertTickets} = require("../src/gilded_rose");

test("First Normal Item Test ", function() {
  const gildedRose = new Shop([
    new NormalItem("+5 Dexterity Vest", 10, 20),
    new NormalItem("Elixir of the Mongoose", 5, 7)])

  gildedRose.updateQuality()

  expect(gildedRose.items).toBeTruthy()
})

test("SellIn Degredation Test", function() {
  const gildedRose = new Shop([
    new NormalItem("Test item", 12, 2),
    new AgedBrie("Old Cheese", -2, 4)
  ])

  originalItem = gildedRose.items[0].sellIn
  originalCheese = gildedRose.items[1].sellIn

  gildedRose.updateQuality()

  oldItem = gildedRose.items[0].sellIn
  oldCheese = gildedRose.items[1].sellIn

  expect(oldItem - originalItem).toBe(-1)
  expect(oldCheese - originalCheese).toBe(-1)
})

test("Normal Item Degredation Test", function(){
  // Step 1
  const gildedRose = new Shop([
    new NormalItem("+5 Dexterity Vest", 0, 20),
    new NormalItem("Elixir of the Mongoose", 5, 7)])

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
    new NormalItem("Elixir of the Mongoose", -1, 1),
    new NormalItem("Elixir of the Mongoose", 4, 0),
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
    new ConjuredItem("Conjured Item", 0, 20),
    new ConjuredItem("Conjured Item", 5, 7)])

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
    new ConjuredItem("Conjured Item", -1, 1),
    new ConjuredItem("Conjured Item", 4, 0),
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
    new AgedBrie("Aged Brie", 2, 0),
    new AgedBrie("Aged Brie", -4, 0)])

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
    new AgedBrie("Aged Brie", -1, 49),
    new AgedBrie("Aged Brie", 4, 50)
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
    new LegendaryItem("Sulfuras, Hand of Ragnaros", -1, 50),
    new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 50),
    new LegendaryItem("Sulfuras, Hand of Ragnaros", 1, 80)
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
    new ConcertTickets("Backstage passes to a TAFKAL80ETC concert", 15, 30),
    new ConcertTickets("Backstage passes to a TAFKAL80ETC concert", 9, 30),
    new ConcertTickets("Backstage passes to a TAFKAL80ETC concert", 4, 30),
    new ConcertTickets("Backstage passes to a TAFKAL80ETC concert", 0, 30)
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
    new ConcertTickets("Backstage passes to a TAFKAL80ETC concert", 15, 50),
    new ConcertTickets("Backstage passes to a TAFKAL80ETC concert", 9, 49),
    new ConcertTickets("Backstage passes to a TAFKAL80ETC concert", 4, 48),
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