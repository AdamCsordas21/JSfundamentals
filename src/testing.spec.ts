import { howFast } from './testing'

describe('how fast', () => {
  it.each<[string, number]>([
    ['ultra fast', 200],
    ['super fast', 150],
    ['pretty fast', 50],
    ['not too fast', 25],
  ])("tells it's %s for speed %d", (expected, speed) => expect(howFast(speed)).toEqual(expected))

  it("throws an error when speed is not a number", () => {
    // @ts-expect-error
    expect(() => howFast('light speed')).toThrow()
  })
})
