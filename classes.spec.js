const {
  Shop,
  FoodShop
} = require('./classes')

describe('class fundamentals', () => {
  describe('shopping', () => {
    it('can instantiate a shop class', () => {
      new Shop([])
    })

    it('provides current stock on request', () => {
      const testShop = new Shop([ { name: 'coke', price: '£123'} ])
      expect(testShop.items).toEqual([
        { name: 'coke', price: '£123' }
      ])
    })

    it('returns contact details', () => {
      const testShop = new Shop([])
      expect(testShop.contactDetails).toEqual('contact@shop.com')
    })
  })

  describe('food shop', () => {
    it('can instantiate a food shop class', () => {
      new FoodShop([])
    })

    it('always has candies in stock', () => {
      const testShop = new FoodShop([])
      expect(testShop.items).toEqual([
        { name: 'candies', price: '£9' }
      ])
    })
  })
})
