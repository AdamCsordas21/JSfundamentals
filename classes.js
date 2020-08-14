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
      new Item('candies', '£9')
    ]
    super(dispatcher, alwaysInStock.concat(items)) // <- new Shop()
  }
}

class Item {
  #name
  #price
  #description
  
  constructor(name, price, description) {
    this.#name = name
    this.#price = price
    this.#description = description
  }
  
  get name() {
    return this.#name
  }
  
  get price() {
    return this.#price
  }
  
  get description() {
    return this.#description
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

class Letter {
  static template = `
Dear {{PERSON}}

{{BODY}}

Regards,
{{AUTHOR}}
`

  #person
  #body
  #author

  constructor(person, body, author) {
    this.#person = person
    this.#body = body
    this.#author = author
  }

  get formated() {
    return Letter.template
      .replace('{{PERSON}}', this.#person)
      .replace('{{BODY}}', this.#body)
      .replace('{{AUTHOR}}', this.#author)
  }
}

module.exports = {
  Shop,
  FoodShop,
  Item,
  Letter,
  Player
}
