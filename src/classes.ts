interface Dispatcher {
  /*
   * Dispatch provided items
   */
  dispatch(items: any): void
}

class ConsoleDispatcher implements Dispatcher {
  dispatch(items: any): void {
    console.log(items)
  }
}

export class Shop {
  #dispatcher: Dispatcher
  #items: Item[]

  constructor(dispatcher: Dispatcher, items: Item[]) {
    this.#dispatcher = dispatcher
    this.#items = items
  }

  get items(): Item[] {
    return this.#items
  }

  dispatch(): void {
    this.#dispatcher.dispatch(this.#items)
  }
}

export class FoodShop extends Shop {
  constructor(dispatcher, items) {
    const alwaysInStock = [
      new Item('candies', '£9')
    ]
    super(dispatcher, alwaysInStock.concat(items)) // <- new Shop()
  }
}

export class Item {
  #name
  #price
  #description
  
  // constructor(name: string, price: string, description?: string) {
  constructor(name: string, price: string, description: string | undefined = undefined) {
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

export class Letter {
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

export class Player {
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
  Item,
  Letter,
  Player
}
