const {
  Shop,
  FoodShop,
  Player,
} = require('./classes')

const nullDispatcher = { dispatch() {} }

describe('class fundamentals', () => {
  describe('shopping', () => {
    it('can instantiate a shop class', () => {
      new Shop([])
    })

    it('provides current stock on request', () => {
      const testShop = new Shop(nullDispatcher, [ { name: 'coke', price: '£123'} ])
      expect(testShop.items).toEqual([
        { name: 'coke', price: '£123' }
      ])
    })
  })

  describe('food shop', () => {
    it('can instantiate a food shop class', () => {
      new FoodShop(nullDispatcher, [])
    })

    it('always has candies in stock', () => {
      const testShop = new FoodShop(nullDispatcher, [])
      expect(testShop.items).toEqual([
        { name: 'candies', price: '£9' }
      ])
    })
  })
})

describe('players', () => {
  it('can create a player', () => {
    new Player('Osh', 23, [])
  })

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

  it('prevents changing player level', () => {
    const osh = new Player('osh', 23, [])
    osh.level = 99
    expect(osh.level).toEqual(23)
  })

  it('can get games', () => {
    const osh = new Player('osh', 23, [{ date: '2020-02-02', result: 'win' }, { date: '2020-02-03', result: 'loss' }])
    expect(osh.games).toEqual([{ date: '2020-02-02', result: 'win' }, { date: '2020-02-03', result: 'loss' }])
  })

  it('can get last won game', () => {
    const osh = new Player('osh', 23, [{ date: '2020-02-02', result: 'win' }, { date: '2020-02-03', result: 'loss' }, { date: '2020-02-01', result: 'win' }])
    expect(osh.lastWin).toEqual({ date: '2020-02-02', result: 'win' })
  })

  it('returns undefined for last won game if the player never won', () => {
    const osh = new Player('osh', 23, [{ date: '2020-02-03', result: 'loss' }])
    expect(osh.lastWin).toEqual(undefined)
  })
})
