class Shop {
  #items

  constructor(items) {
    this.#items = items
  }

  get items() {
    return this.#items
  }
}

class FoodShop extends Shop {
  constructor(items) {
    const alwaysInStock = [
      { name: 'candies', price: '£9' }
    ]
    super([...alwaysInStock, ...items]) // <- new Shop()
  }
}

module.exports = {
  Shop,
  FoodShop
}
