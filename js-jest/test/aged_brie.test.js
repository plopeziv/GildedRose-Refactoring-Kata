const {AgedBrie} = require("../src/aged_brie");

// WackyItem

test("Aged Brie Appreciation Test", function(){
    const good = new AgedBrie("Aged Brie", 2, 0)
    const expired = new AgedBrie("Aged Brie", -4, 0)

    const goodOriginalQuality = good.quality
    const expiredOriginalQuality = expired.quality
  

    good.updateItem()
    expired.updateItem()
  
    
    const goodAppreciationValue = good.quality - goodOriginalQuality
    const expiredAppreciationValue = expired.quality - expiredOriginalQuality
  
    expect(expiredAppreciationValue).toBe(2)
    expect(goodAppreciationValue).toBe(1) 
  })
  
  test("Aged Bree Appreciating Item Upper Quality Bound", function(){
    // Step 1
    expired = new AgedBrie("Aged Brie", -1, 49),
    good = new AgedBrie("Aged Brie", 4, 50)
    
  
    // Step 2
    expired.updateItem()
    good.updateItem()
  
    // Step 3
    const expiredAppreciationValue = expired.quality
    const goodAppreciationValue = good.quality
  
    expect(expiredAppreciationValue).toBe(50)
    expect(goodAppreciationValue).toBe(50)
  })
