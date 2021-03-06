import {
  Shop,
  FoodShop,
  Item,
  Letter,
  Player,
  Dispatcher,
  Game
} from './classes'

const nullDispatcher: Dispatcher = { dispatch() { } }

// const myObject = new Object() // {}
// const myArray = new Array() // []
// const myString = new String('dsf') // 'dsf'
// const myNumber = new Number(235) // 235

describe('class fundamentals', () => {
  it('provides current stock on request', () => {
    // refactor to make this test also use the Item class
    const testShop = new FoodShop(nullDispatcher, [])
    expect(testShop.items).toContainEqual(new Item('candy', '£123', 'super sweet candy that is also very cheap'))
  })
})

describe('food shop', () => {
  it('can instantiate a food shop class', () => {
    new FoodShop(nullDispatcher, [])
  })

  it('always has candies in stock', () => {
    const testShop = new FoodShop(nullDispatcher, [])
    expect(testShop.items).toContainEqual(new Item('candies', '£9'))
  })

  describe('shop items', () => {
    it('provides item name', () => {
      expect(new Item('candy', 'some price').name).toEqual('candy')
    })

    it('provides item price', () => {
      expect(new Item('candy', '£123').price).toEqual('£123')
    })

    it('provides item description', () => {
      expect(new Item('candy', '£123', 'super sweet candy that is also very cheap').description).toEqual('super sweet candy that is also very cheap')
    })
  })
})

describe('Letter', () => {
  it('formats a letter', () => {
    expect(new Letter('Adam', 'How do you do?', 'Osh').formated).toEqual(`
Dear Adam

How do you do?

Regards,
Osh
`)

    expect(new Letter('Nela', 'I love you', 'Adam').formated).toEqual(`
Dear Nela

I love you

Regards,
Adam
`)
  })
})

describe('players', () => {
  it('can get player name', () => {
    const osh = new Player('osh', 23, [])
    expect(osh.name).toEqual('osh')
  })

  it('can change player name', () => {
    const osh = new Player('osh', 23, [])
    osh.name = 'Osh'
    expect(osh.name).toEqual('Osh')
  })

  it('can get player level', () => {
    const osh = new Player('osh', 23, [])
    expect(osh.level).toEqual(23)
  })
  it('can get games', () => {
    const osh = new Player('osh', 23, [{ date: '2020-02-02', result: 'win' }, { date: '2020-02-03', result: 'loss' }])
    expect(osh.games).toEqual([{ date: '2020-02-02', result: 'win' }, { date: '2020-02-03', result: 'loss' }])
  })

  it('can get last won game', () => {
    const osh = new Player('osh', 23, [{ date: '2020-01-31', result: 'win' }, { date: '2020-02-02', result: 'win' }, { date: '2020-02-03', result: 'loss' }, { date: '2020-02-01', result: 'win' }])
    expect(osh.lastWin).toEqual({ date: '2020-02-02', result: 'win' })
  })

  it('returns undefined for last won game if the player never won', () => {
    const osh = new Player('osh', 23, [{ date: '2020-02-03', result: 'loss' }])
    expect(osh.lastWin).toEqual(undefined)
  })

  // create a class for the games and refactor above code to use it
  // suggestion: start by adding new tests for the class alone, before you try to use it in the 
  describe('games', () => {
    it('can get games name', () => {
      const psStore = new Game('Call of Duty')
      expect(psStore.name).toEqual('Call of Duty')
    })
  })
})
