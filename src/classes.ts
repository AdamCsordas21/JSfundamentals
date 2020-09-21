export interface Dispatcher {
  /*
   * Dispatch provided items
   */
  dispatch(items: any): void
}

export class ConsoleDispatcher implements Dispatcher {
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
  constructor(dispatcher: Dispatcher, items: Item[]) {
    const alwaysInStock: Item[] = [
      new Item('candies', '£9')
    ]
    super(dispatcher, alwaysInStock.concat(items)) // <- new Shop()
  }
}

export class Item {
  #name: string
  #price: string
  #description: string | undefined
  
  // constructor(name: string, price: string, description?: string) {
  constructor(name: string, price: string, description: string | undefined = undefined) {
    this.#name = name
    this.#price = price
    this.#description = description
  }
  
  get name(): string {
    return this.#name
  }
  
  get price(): string {
    return this.#price
  }
  
  get description(): string | undefined {
    return this.#description
  }
}

export class Letter {
  private static readonly template = `
Dear {{PERSON}}

{{BODY}}

Regards,
{{AUTHOR}}
`

  #person: string
  #body: string
  #author: string

  constructor(person: string, body: string, author: string) {
    this.#person = person
    this.#body = body
    this.#author = author
  }

  get formated(): string {
    return Letter.template
      .replace('{{PERSON}}', this.#person)
      .replace('{{BODY}}', this.#body)
      .replace('{{AUTHOR}}', this.#author)
  }
}

export class Player {
  #name: string
  #level: number
  #games: any[]

  constructor(name: string, level: number, games: any[]) {
    this.#name = name
    this.#level = level
    this.#games = games
  }

  get name(): string {
    return this.#name
  }

  set name(name: string) {
    this.#name = name
  }

  get level(): number {
    return this.#level
  }

  get games(): any[] {
    return this.#games
  }

  get lastWin(): any[] {
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
