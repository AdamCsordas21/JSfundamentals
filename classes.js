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

module.exports = {
  Shop,
}
