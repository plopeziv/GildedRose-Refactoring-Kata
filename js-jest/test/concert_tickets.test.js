const {ConcertTickets} = require("../src/Concert_Tickets");

test("Concert Tickets Appreciation Test", function(){
  // Setup Test Step 1
  const far = new ConcertTickets("Backstage passes to a TAFKAL80ETC concert", 15, 30)
  const upcoming = new ConcertTickets("Backstage passes to a TAFKAL80ETC concert", 9, 30)
  const close = new ConcertTickets("Backstage passes to a TAFKAL80ETC concert", 4, 30)
  const expired = new ConcertTickets("Backstage passes to a TAFKAL80ETC concert", 0, 30)

  const farConcertOriginalQuality = far.quality
  const upcomingConcertOriginalQuality = upcoming.quality
  const closeConcertOriginalQuality = close.quality

  // Test Step 2
  far.updateItem()
  upcoming.updateItem()
  close.updateItem()
  expired.updateItem()

  // Test Step 3
  const farConcertValue = far.quality - farConcertOriginalQuality
  const upcomingConcertValue = upcoming.quality - upcomingConcertOriginalQuality
  const closeConcertValue = close.quality - closeConcertOriginalQuality

  expect(farConcertValue).toBe(1)
  expect(upcomingConcertValue).toBe(2)
  expect(closeConcertValue).toBe(3)
  expect(expired.quality).toBe(0)
})

test("Concert Tickets Upper Bound Test", function(){
  // Step 1
  const far = new ConcertTickets("Backstage passes to a TAFKAL80ETC concert", 15, 50)
  const upcoming = new ConcertTickets("Backstage passes to a TAFKAL80ETC concert", 9, 49)
  const close = new ConcertTickets("Backstage passes to a TAFKAL80ETC concert", 4, 48)
  

  // Step 2
  far.updateItem()
  upcoming.updateItem()
  close.updateItem()
  
  // Step 3
  expect(far.quality).toBe(50)
  expect(upcoming.quality).toBe(50)
  expect(close.quality).toBe(50)
})