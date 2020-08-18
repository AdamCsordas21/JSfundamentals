const isRed = (square) => square.colour === 'red'

const makeCircle = (square) => ({
  id: square.id,
  shape: 'circle',
  colour: square.colour,
  radius: square.sideLength / 11 * 2
})

const isShadeOfGreen = (square) => square.colour.includes('green')

const doubleDigitId = (square) => ({
  id: square.id.padStart(2, '0'),
  shape: 'square',
  sideLength: square.sideLength,
  colour: square.colour
})

const shortDescriptions = (square) => square.colour.length >= 8 ? `${square.colour.substring(0, 5)}...` : square.colour

const longDescriptions = (square) => square.colour.length > 8

module.exports = {
  isRed,
  makeCircle,
  isShadeOfGreen,
  doubleDigitId,
  shortDescriptions,
  longDescriptions,
}
