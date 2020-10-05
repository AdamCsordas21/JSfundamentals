import {
  addNumbers,
  doesLoveOrNot,
  shapeToCirclesArea,
  totalAreaOfRedSquaresReducer,
  isRed,
  roundTheEdges,
  roundTheEdges2,
  countEvenAndOdd,
  Flower,
  Figure
} from './reduce-to-ashes'

import {
  Circle,
  Square
} from './filter-or-map-or-both'

/*
reduce takes 2 parameters:
1. reducer function that's evaluated for each of the elements, takes 2-4 parameters:
  1. accumulator variable - on the first iteration it will hold the initial value or
    the first element if the initial value was undefined;
    on subsequent invocations it will hold the previous invocation's returned value
  2. current element - holding a single element from the current iteration
  3. index of the current element (optional)
  4. the entire array that is being reduced (optional)
2. initial value (optional) - when it's undefined, it'll start with the second element
  and the accumulator will hold the value of the first element
*/

test('adds numbers', () => {
  const input: number[] = [1, 2, 3, 4, 5]
  expect(addNumbers(input)).toEqual(15)
})

test('does love/does not love', () => {
  const flower: Flower = {
    petals: ['big', 'small', 'big', 'small']
  }
  expect(doesLoveOrNot(flower)).toEqual('loves')
})

describe('reduce to ashes', () => {
  const figures: Figure[] = [
    { id: '1', shape: 'square', sideLength: 11, colour: 'red' },
    { id: '2', shape: 'circle', radius: 22, colour: 'blue' },
    { id: '3', shape: 'square', sideLength: 33, colour: 'green' },
    { id: '4', shape: 'circle', radius: 44, colour: 'dark red' },
    { id: '5', shape: 'square', sideLength: 55, colour: 'sky blue' },
    { id: '6', shape: 'circle', radius: 66, colour: 'grass green' },
    { id: '7', shape: 'square', sideLength: 77, colour: 'also red' },
    { id: '8', shape: 'circle', radius: 88, colour: 'not so blue' },
    { id: '9', shape: 'square', sideLength: 99, colour: 'definitely not green' },
  ]

  test('calculates total area of blue circles', () => {
    expect(figures.reduce(shapeToCirclesArea, 0)).toBeCloseTo(25849, 0)
  })

  test('calculates total area of red squares', () => {
    expect(figures.reduce(totalAreaOfRedSquaresReducer, 0)).toEqual(6050)
  })

  test('calculates total area of red squares (alternative)', () => {
    const actual: number = figures
      .filter(({ colour }: Figure): boolean => colour.includes('red'))
      .filter((figure: Figure): figure is Square => figure.shape === 'square')
      .map(({ sideLength }: Square): Square['sideLength'] => sideLength)
      .map((sideLength: Square['sideLength']): number => sideLength * sideLength)
      .reduce((total: number, area: number): number => total + area)
    expect(actual).toEqual(6050)
  })

  test('get red squares and double its sides', () => {
    expect(figures.reduce(isRed, [])).toEqual([
      { id: '1', shape: 'square', sideLength: 22, colour: 'red' },
      { id: '7', shape: 'square', sideLength: 154, colour: 'also red' },
    ])
  })

  test('round the edges to shape it to circles', () => {
    const expected: Circle[] = [
      { id: '1', shape: 'circle', radius: 22, colour: 'red' },
      { id: '2', shape: 'circle', radius: 22, colour: 'blue' },
      { id: '3', shape: 'circle', radius: 66, colour: 'green' },
      { id: '4', shape: 'circle', radius: 44, colour: 'dark red' },
      { id: '5', shape: 'circle', radius: 110, colour: 'sky blue' },
      { id: '6', shape: 'circle', radius: 66, colour: 'grass green' },
      { id: '7', shape: 'circle', radius: 154, colour: 'also red' },
      { id: '8', shape: 'circle', radius: 88, colour: 'not so blue' },
      { id: '9', shape: 'circle', radius: 198, colour: 'definitely not green' },
    ]
    expect(figures.reduce(roundTheEdges, [])).toEqual(expected)
    expect(figures.map(roundTheEdges2)).toEqual(expected)
  })

  it('counts even and odd numbers', () => {
    const myNumbers: number[] = [1, 2, 3, 4, 5, 234, 2345, 2345, 25, 34534, 53, 45, 36, 657345, 3, 45, 345]
    expect(countEvenAndOdd(myNumbers)).toEqual('There was 5 even and 12 odd numbers')
  })
})
