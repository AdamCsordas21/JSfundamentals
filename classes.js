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
  #level
  #games

  constructor(name, level, games) {
    this.#name = name
    this.#level = level
    this.#games = games
  }

  get name() {
    return this.#name
  }

  set name(name) {
    this.#name = name
  }

  get level() {
    return this.#level
  }

  get games() {
    return this.#games
  }

  get lastWin() {
    return this.#games
      .filter((game) => game.result === 'win') 
      .sort((a, b) => b.date.localeCompare(a.date))
      [0]
  }
}

module.exports = {
  Shop,
  FoodShop,
  Player
}
