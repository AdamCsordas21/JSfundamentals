import {
  filterHigherThan2,
  filterLowerThan2,
  filterOutOddNumbers,
  filter,
  filterMultiplesOf3,
  filterHigherOrEqualTo10,
  add1ToEach,
  subtract2FromEach,
  doubleEach,
  tripleEach,
  fizzBuzz,
  miniFizzBuzz,
  oshWasHere,
  integerDescriptorOfList,
  integerDescriptor,
  isScoreHigh,
} from './'

describe('filtering', () => {
  const testArray: number[] = [1, 2, 3, 4]

  it('returns number higher than 2', () => {
    const actual: number[] = filterHigherThan2(testArray)
    const expected: number[] = [3, 4]

    expect(actual).toEqual(expected)
  })

  it('returns number lower than 2', () => {
    const actual: number[] = filterLowerThan2(testArray)
    const expected: number[] = [1]

    expect(actual).toEqual(expected)
  })

  it('returns even numbers', () => {
    const actual: number[] = filterOutOddNumbers(testArray)
    const expected = [2, 4]

    expect(actual).toEqual(expected)
  })

  it('returns result of my condition', () => {
    const stringArray = ['osh', 'adam', 'nela']
    const actual = filter(stringArray, (s) => s === 'osh')
    const expected = ['osh']

    expect(actual).toEqual(expected)
  })

  it('returns multiples of three', () => {
    const testArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const actual: number[] = filterMultiplesOf3(testArray)
    const expected: number[] = [3, 6, 9, 12]

    expect(actual).toEqual(expected)
  })

  it('returns numbers higher or equal to 10', () => {
    const testArray: number[] = [-20, -10, -1, 0, 1, 10, 20]
    const actual: number[] = filterHigherOrEqualTo10(testArray)
    const expected: number[] = [10, 20]

    expect(actual).toEqual(expected)
  })

})

describe('map', () => {
  it('adds 1 to each of the elements', () => {
    const testInput: number[] = [1, 2, 3]
    const actual: number[] = add1ToEach(testInput)
    const expected: number[] = [2, 3, 4]

    expect(actual).toEqual(expected)
  })

  it('subtracts 2 from each element', () => {
    const testInput: number[] = [1, 2, 3]
    const actual: number[] = subtract2FromEach(testInput)
    const expected: number[] = [-1, 0, 1]

    expect(actual).toEqual(expected)
  })

  it('doubles each number', () => {
    const testInput: number[] = [0, 1, 2, 3]
    const actual: number[] = doubleEach(testInput)
    const expected: number[] = [0, 2, 4, 6]

    expect(actual).toEqual(expected)
  })

  it('triples each number', () => {
    const testInput: number[] = [0, 1, 2, 3]
    const actual: number[] = tripleEach(testInput)
    const expected: number[] = [0, 3, 6, 9]

    expect(actual).toEqual(expected)
  })

  it('fizz buzz', () => {
    const testArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    const actual: (string | number)[] = fizzBuzz(testArray)
    const expected: (string | number)[] = [1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz", 16]

    expect(actual).toEqual(expected)
  })

  it('mini fizz buzz', () => {
    // if number is divisible by 2, replace it with "fizz"
    // if number is divisible by 3, replace it with "buzz"
    // if number is divisible by 2 and 3, replace it with "fizzbuzz"
    const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,]
    const actual = miniFizzBuzz(testArray)
    const expected = [1, "fizz", "buzz", "fizz", 5, "fizzbuzz", 7, "fizz", "buzz", "fizz", 11, "fizzbuzz", 13, "fizz", "buzz", "fizz"]

    expect(actual).toEqual(expected)
  })

  it('osh was here', () => {
    // if number is divisible by 2, replace it with "osh"
    // if number is divisible by 4, replace it with "was"
    // if number is divisible by 8, replace it with "here"
    // if number is bigger than 10, replace it with "!"
    const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    const actual = oshWasHere(testArray)
    const expected = [1, "osh", 3, "was", 5, "osh", 7, "here", 9, "osh", "!", "!", "!", "!", "!", "!"]

    expect(actual).toEqual(expected)
  })

  it('describes a list of intergers', () => {
    // for any list of integers (whole numbers) describe it as follows
    // positive/negative (excluding zero)
    // even/odd
    // big/small (if absolute value is greater than 100 that makes it big)

    // example 1: 0 -> small even number
    // example 2: -1 -> small negative odd number
    // example 3: 101 -> big positive odd number

    const testArray = [
      0,
      1,
      -1,
      2,
      -2,
      100,
      -100,
      101,
      -101,
      102,
      -102
    ]

    const expected = [
      "small even number",
      "small positive odd number",
      "small negative odd number",
      "small positive even number",
      "small negative even number",
      "small positive even number",
      "small negative even number",
      "big positive odd number",
      "big negative odd number",
      "big positive even number",
      "big negative even number"
    ]

    const actual = integerDescriptorOfList(testArray)
    expect(actual).toEqual(expected)
  })
})
