// interface Dispatcher {
//   /*
//    * Dispatch provided items
//    */
//   dispatch(items)
// }

class ConsoleDispatcher /* implements Dispatcher */ {
  dispatch(items) {
    console.log(items)
  }
}

class Shop {
  #dispatcher
  #items

  constructor(dispatcher, items) {
    this.#dispatcher = dispatcher
    this.#items = items
  }

  get items() {
    return this.#items
  }

  dispatch() {
    this.#dispatcher.dispatch(this.#items)
  }
}

class FoodShop extends Shop {
  constructor(dispatcher, items) {
    const alwaysInStock = [
      { name: 'candies', price: '£9' }
    ]
    super(dispatcher, [...alwaysInStock, ...items]) // <- new Shop()
  }
}

class Player {
  #name
  
  constructor(name) {
    this.#name = name  
  }
  
  get name() {
    return this.#name
  }
}

module.exports = {
  Shop,
  FoodShop,
  Player
}
