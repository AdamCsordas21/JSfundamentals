import {
  isRed,
  isBlue,
  makeCircle,
  isShadeOfGreen,
  isShadeOfBlue,
  doubleDigitId,
  shortDescriptions,
  longDescriptions,
  Square
} from './filter-or-map-or-both'

describe('filter or map', () => {
  const squares: Square[] = [
    { id: '1', shape: 'square', sideLength: 11, colour: 'red' },
    { id: '2', shape: 'square', sideLength: 22, colour: 'blue' },
    { id: '3', shape: 'square', sideLength: 33, colour: 'green' },
    { id: '4', shape: 'square', sideLength: 44, colour: 'dark red' },
    { id: '5', shape: 'square', sideLength: 55, colour: 'sky blue' },
    { id: '6', shape: 'square', sideLength: 66, colour: 'grass green' },
    { id: '7', shape: 'square', sideLength: 77, colour: 'also red' },
    { id: '8', shape: 'square', sideLength: 88, colour: 'not so blue' },
    { id: '9', shape: 'square', sideLength: 99, colour: 'definitely not green' },
  ]

  test('only red ones', () => {
    expect(squares.filter(isRed)).toEqual([
      { id: '1', shape: 'square', sideLength: 11, colour: 'red' },
    ])
  })

  test('only blue ones', () => {
    expect(squares.filter(isBlue)).toEqual([
      { id: '2', shape: 'square', sideLength: 22, colour: 'blue' },
    ])
  })

  test('round the edges to shape it to circles', () => {
    expect(squares.map(makeCircle)).toEqual([
      { id: '1', shape: 'circle', radius: 2, colour: 'red' },
      { id: '2', shape: 'circle', radius: 4, colour: 'blue' },
      { id: '3', shape: 'circle', radius: 6, colour: 'green' },
      { id: '4', shape: 'circle', radius: 8, colour: 'dark red' },
      { id: '5', shape: 'circle', radius: 10, colour: 'sky blue' },
      { id: '6', shape: 'circle', radius: 12, colour: 'grass green' },
      { id: '7', shape: 'circle', radius: 14, colour: 'also red' },
      { id: '8', shape: 'circle', radius: 16, colour: 'not so blue' },
      { id: '9', shape: 'circle', radius: 18, colour: 'definitely not green' },
    ])
  })

  test('only shades of green ones', () => {
    expect(squares.filter(isShadeOfGreen)).toEqual([
      { id: '3', shape: 'square', sideLength: 33, colour: 'green' },
      { id: '6', shape: 'square', sideLength: 66, colour: 'grass green' },
      { id: '9', shape: 'square', sideLength: 99, colour: 'definitely not green' },
    ])
  })

  test('only shades of blue ones', () => {
    expect(squares.filter(isShadeOfBlue)).toEqual([
      { id: '2', shape: 'square', sideLength: 22, colour: 'blue' },
      { id: '5', shape: 'square', sideLength: 55, colour: 'sky blue' },
      { id: '8', shape: 'square', sideLength: 88, colour: 'not so blue' },
    ])
  })

  test('correct ids', () => {
    expect(squares.map(doubleDigitId)).toEqual([
      { id: '01', shape: 'square', sideLength: 11, colour: 'red' },
      { id: '02', shape: 'square', sideLength: 22, colour: 'blue' },
      { id: '03', shape: 'square', sideLength: 33, colour: 'green' },
      { id: '04', shape: 'square', sideLength: 44, colour: 'dark red' },
      { id: '05', shape: 'square', sideLength: 55, colour: 'sky blue' },
      { id: '06', shape: 'square', sideLength: 66, colour: 'grass green' },
      { id: '07', shape: 'square', sideLength: 77, colour: 'also red' },
      { id: '08', shape: 'square', sideLength: 88, colour: 'not so blue' },
      { id: '09', shape: 'square', sideLength: 99, colour: 'definitely not green' },
    ])
  })

  test('short descriptions', () => {
    expect(squares.map(shortDescriptions)).toEqual([
      'red',
      'blue',
      'green',
      'dark ...',
      'sky b...',
      'grass...',
      'also ...',
      'not s...',
      'defin...',
    ])
  })

  test('long descriptions', () => {
    expect(squares.filter(longDescriptions)).toEqual([
      { id: '6', shape: 'square', sideLength: 66, colour: 'grass green' },
      { id: '8', shape: 'square', sideLength: 88, colour: 'not so blue' },
      { id: '9', shape: 'square', sideLength: 99, colour: 'definitely not green' },
    ])
  })
})
