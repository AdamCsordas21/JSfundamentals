const {
  isRed,
  makeCircle,
  isShadeOfGreen,
  doubleDigitId,
  shortDescriptions,
  longDescriptions,
} = require('./filter-or-map-or-both')

describe('filter or map', () => {
  const squares = [
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
    expect(squares._(isRed)).toEqual([
      { id: '1', shape: 'square', sideLength: 11, colour: 'red' },
    ])
  })

  test('round the edges to shape it to circles', () => {
    expect(squares._(makeCircle)).toEqual([
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

  test('only shades of red ones', () => {
    expect(squares._(isShadeOfGreen)).toEqual([
      { id: '3', shape: 'square', sideLength: 33, colour: 'green' },
      { id: '6', shape: 'square', sideLength: 66, colour: 'grass green' },
      { id: '9', shape: 'square', sideLength: 99, colour: 'definitely not green' },
    ])
  })

  test('correct ids', () => {
    expect(squares._(doubleDigitId)).toEqual([
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
    expect(squares._(shortDescriptions)).toEqual([
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
    expect(squares._(longDescriptions)).toEqual([
      { id: '06', shape: 'square', sideLength: 66, colour: 'grass green' },
      { id: '08', shape: 'square', sideLength: 88, colour: 'not so blue' },
      { id: '09', shape: 'square', sideLength: 99, colour: 'definitely not green' },
    ])
  })
})
