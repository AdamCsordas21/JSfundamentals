const { factorial } = require('./recursion')

describe('recursion', () => {
  const testCases = [
    { n: 0, expected: 0 },
    { n: 1, expected: 1 },
    { n: 2, expected: 2 },
    { n: 3, expected: 6 },
    { n: 4, expected: 24 },
    { n: 5, expected: 120 },
  ]
  testCases.forEach(({ n, expected }) =>
    it(`calculates factorial of ${n}`, () => {
      expect(factorial(n)).toEqual(expected)
    })
  )
})