const {ConjuredItem} = require("../src/conjured_item");

test("Conjured Item Degredation Test", function(){
  // Step 1
  expired = new ConjuredItem("Conjured Item", 0, 20)
  good = new ConjuredItem("Conjured Item", 5, 7)

  const expiredOriginalQuality = expired.quality
  const goodOriginalQuality = good.quality

  // Step 2
  expired.updateItem()
  good.updateItem()

  // Step 3
  const expiredDegridationValue = expired.quality - expiredOriginalQuality
  const goodDegridationValue = good.quality - goodOriginalQuality

  expect(expiredDegridationValue).toBe(-4)
  expect(goodDegridationValue).toBe(-2)
})

test("Conjured Item Lower Quality Bound", function(){
  // Step 1
  expired = new ConjuredItem("Conjured Item", -1, 1)
  good = new ConjuredItem("Conjured Item", 4, 0)

  // Step 2
  expired.updateItem()
  good.updateItem()

  // Step 3
  expect(expired.quality).toBe(0)
  expect(good.quality).toBe(0)
})