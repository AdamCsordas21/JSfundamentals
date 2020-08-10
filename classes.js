class Shop {
  #contactDetails = 'contact@shop.com'
  #items

  constructor(items) {
    this.#items = items
  }

  get items() {
    return this.#items
  }
  
  get contactDetails() {
    return this.#contactDetails
  }
}

class FoodShop {
  #alwaysInStock = [
    { name: 'candies', price: '£9' }
  ]
  #items

  constructor(items) {
    this.#items = [...this.#alwaysInStock, ...items]
    // this.#items = items
  }

  get items() {
    return this.#items
    // return [...this.#items, ...this.#alwaysInStock]
  }
}

module.exports = {
  Shop,
  FoodShop
}
