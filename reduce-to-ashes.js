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

const isRed = (bigRedSquares, { id, shape, colour, sideLength }) => {
  if (shape === 'square' && colour.includes('red')) {
    bigRedSquares.push({ id, shape, colour, sideLength: sideLength * 2 })
  }
  return bigRedSquares
}

const roundTheEdges = (accumulator, { id, colour, shape, sideLength, radius }) => accumulator.concat({
  id,
  colour,
  shape: 'circle',
  radius: shape === 'square' ? sideLength * 2 : radius,
})

const roundTheEdges2 = ({ id, colour, shape, sideLength, radius }) => ({
  id,
  colour,
  shape: 'circle',
  radius: shape === 'square' ? sideLength * 2 : radius,
})


module.exports = {
  addNumbers,
  doesLoveOrNot,
  shapeToCirclesArea,
  totalAreaOfRedSquaresReducer,
  isRed,
  roundTheEdges,
  roundTheEdges2,
}
