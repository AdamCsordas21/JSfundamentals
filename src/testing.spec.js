const { howFast } = require('./testing')

describe('how fast', () => {
  it("tells it's ultra fast for speeds 200 and up", () => {
    expect(howFast(200)).toEqual('ultra fast')
  })

  it("tells it's super fast for speeds between 100 and 199 inclusive", () => {
    expect(howFast(150)).toEqual('super fast')
  })

  it("tells it's pretty fast for speeds between 50 and 99 inclusive", () => {
    expect(howFast(50)).toEqual('pretty fast')
  })

  it("tells it's not too fast for speeds below 50", () => {
    expect(howFast(25)).toEqual('not too fast')
  })

  it("throws an error when speed is not a number", () => {
    expect(() => howFast('light speed')).toThrow()
  })
})