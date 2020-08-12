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
  #playerName
  #playerLevel

  constructor(player, playerLevel) {
    this.#playerName = player
    this.#playerLevel = playerLevel
  }

  get name() {
    return this.#playerName
  }
  
  set name(name) {
    this.#playerName = name
  }
  
  get level() {
    return this.#playerLevel
  }
  
  static level(level) {
    this.#playerLevel = level
  }
}

module.exports = {
  Shop,
  FoodShop,
  Player
}
