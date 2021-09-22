const {WackyItem} = require("../src/wacky_item");

// WackyItem

test("On first update, quality goes to 50", function() {
  const wackyItem = new WackyItem("Wacky Name", 12, 10)

  wackyItem.updateItem()

  expect(wackyItem.quality).toBe(50)
})

test("On Repeat, quality goes to 0", function(){
  const wackyItem = new WackyItem("Wacky Name", 12, 10)
  
  wackyItem.updateItem()
  wackyItem.updateItem()

  expect(wackyItem.quality).toBe(0)
})
