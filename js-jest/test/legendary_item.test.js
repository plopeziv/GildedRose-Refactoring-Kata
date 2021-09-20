const {LegendaryItem} = require("../src/legendary_item");

test("Legendary Item Quality Retention", function(){
  // Setup Test Step 1
  legend = new LegendaryItem("Sulfuras, Hand of Ragnaros", 5, 80)

  // Initiate Test Step 2
  legend.updateItem()

  // Initiate Test Step 3
  expect(legend.quality).toBe(80)
})

test("Legendary Item Never Sold", function(){
    // Setup Test Step 1
    legend = new LegendaryItem("Sulfuras, Hand of Ragnaros", 5, 80)
  
    // Initiate Test Step 2
    legend.updateItem()
  
    // Initiate Test Step 3
    expect(legend.sellIn).toBe(0)
  })