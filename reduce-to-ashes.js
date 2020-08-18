const shapeToCirclesArea = (totalArea, figure) => {
  if (figure.shape === 'circle' && figure.colour.includes('blue')) {
    totalArea += figure.radius * figure.radius * Math.PI
  }
  return totalArea
}

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


module.exports = {
  shapeToCirclesArea,
  addNumbers,
  doesLoveOrNot
}


// [0, 1, 2, 3, 4].reduce( (accumulator, currentValue, currentIndex, array) => accumulator + currentValue )
// Area of Circle = radius * radius * PI