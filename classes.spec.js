const {
  Shop,
} = require('./classes')

describe('class fundamentals', () => {
  describe('shopping', () => {
    it('can instantiate a shop class', () => {
      const items = [
        { name: 'phone', price: '£2' },
        { name: 'laptop', price: '£3' },
      ]
      const testShop = new Shop(items)
      expect(testShop.getItems()).toEqual(items)
    })

    it('can instantiate a shop class', () => {
      const testShop = new Shop([])
      expect(testShop.getContactDetails()).toEqual('contact@shop.com')
    })
  })
})