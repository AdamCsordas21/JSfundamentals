const {
  addNumbers,
  doesLoveOrNot,
  shapeToCirclesArea,
  totalAreaOfRedSquaresReducer
} = require('./reduce-to-ashes')

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
  const input = [1, 2, 3, 4, 5]
  expect(addNumbers(input)).toEqual(15)
})

test('does love/does not love', () => {
  const flower = {
    petals: ['big', 'small', 'big', 'small']
  }
  expect(doesLoveOrNot(flower)).toEqual('loves')
})

describe('reduce to ashes', () => {
  const figures = [
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
    const actual = figures
      .filter(({ shape }) => shape === 'square')
      .filter(({ colour }) => colour.includes('red'))
      .map(({ sideLength }) => sideLength)
      .map((sideLength) => sideLength * sideLength)
      .reduce((total, area) => total + area)
    expect(actual).toEqual(6050)
  })
})
