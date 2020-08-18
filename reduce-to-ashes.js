const addNumbers = (numbers) => {
  return numbers.reduce((sum, number) => sum + number)
  // let sum = 0
  // for (const number of numbers) {
  //   sum += number
  // }
  // return sum
}

const doesLoveOrNot = ({ petals }) => {
  return petals.reduce((loves) => !loves, true) ? 'loves' : 'does not'
  // return petals.length % 2 === 0 ? 'loves' : 'does not'
}

const shapeToCirclesArea = (totalArea, { shape, colour, radius }) => {
  if (shape === 'circle' && colour.includes('blue')) {
    totalArea += radius * radius * Math.PI
  }
  return totalArea
}

const totalAreaOfRedSquaresReducer = (totalArea, { shape, colour, sideLength }) => {
  if (shape === 'square' && colour.includes('red')) {
    totalArea += sideLength * sideLength
  }
  return totalArea
}

module.exports = {
  addNumbers,
  doesLoveOrNot,
  shapeToCirclesArea,
  totalAreaOfRedSquaresReducer,
}


// [0, 1, 2, 3, 4].reduce( (accumulator, currentValue, currentIndex, array) => accumulator + currentValue )
// Area of Circle = radius * radius * PI