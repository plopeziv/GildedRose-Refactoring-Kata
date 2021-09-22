const {Item} = require("../src/gilded_rose");

test("Throws error if Item quality is out of range", function(){
  try {
    new Item("Name", 3, -1)
    expect(true).toBe(false);
  } catch (error) {
    expect(error.message).toEqual("Quality out of range")
  }
})

test("Item attributes", function(){
  testItem = new Item("Always use good practices", 20, 4)

  expect(testItem.name).toBe("Always use good practices")
  expect(testItem.sellIn).toBe(20)
  expect(testItem.quality).toBe(4)
})