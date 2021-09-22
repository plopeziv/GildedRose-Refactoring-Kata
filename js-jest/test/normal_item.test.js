const {NormalItem} = require("../src/normal_item");

test("Normal Item Degredation Test", function(){
  // Step 1
  const expired = new NormalItem("+5 Dexterity Vest", 0, 20)
  const good = new NormalItem("Elixir of the Mongoose", 5, 7)

  const expiredOriginalQuality = expired.quality
  const goodOriginalQuality = good.quality

  // Step 2
  expired.updateItem()
  good.updateItem()

  // Step 3
  const expiredDegridationValue = expired.quality - expiredOriginalQuality
  const goodDegridationValue = good.quality - goodOriginalQuality

  expect(expiredDegridationValue).toBe(-2)
  expect(goodDegridationValue).toBe(-1)
})

test("Normal Item Lower Quality Bound", function(){
  // Step 1
  const expired = new NormalItem("Elixir of the Mongoose", -1, 1)
  const good = new NormalItem("Elixir of the Mongoose", 4, 0)

  // Step 2
  expired.updateItem()
  good.updateItem()

  // Step 3
  expect(expired.quality).toBe(0)
  expect(good.quality).toBe(0)
})