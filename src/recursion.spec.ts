import { factorial } from './recursion'

describe('recursion', () => {
  type RecursionTestCase = [n: number, expected: number]
  const testCases: RecursionTestCase[] = [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 6],
    [4, 24],
    [5, 120],
  ]
  // testCases.forEach(({ n, expected }: RecursionTestCase): void =>
  //   it(`calculates factorial of ${n}`, () => {
  //     expect(factorial(n)).toEqual(expected)
  //   })
  // )
  it.each<RecursionTestCase>(testCases)('calculates factorial of %s', (n, expected) => {
    expect(factorial(n)).toEqual(expected)
  })
})
