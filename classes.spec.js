const {
  Shop,
  FoodShop,
} = require('./classes')

const dummyDispatcher = { dispatch() {} }

describe('class fundamentals', () => {
  describe('shopping', () => {
    it('can instantiate a shop class', () => {
      new Shop([])
    })

    it('provides current stock on request', () => {
      const testShop = new Shop(dummyDispatcher, [ { name: 'coke', price: '£123'} ])
      expect(testShop.items).toEqual([
        { name: 'coke', price: '£123' }
      ])
    })
  })

  describe('food shop', () => {
    it('can instantiate a food shop class', () => {
      new FoodShop(dummyDispatcher, [])
    })

    it('always has candies in stock', () => {
      const testShop = new FoodShop(dummyDispatcher, [])
      expect(testShop.items).toEqual([
        { name: 'candies', price: '£9' }
      ])
    })
  })
})
