class Shop {
  contactDetails = 'contact@shop.com'

  constructor(items) {
    this.items = items
  }

  getItems() {
    return this.items
  }
  
  getContactDetails() {
    return this.contactDetails
  }
}

module.exports = {
  Shop,
}
