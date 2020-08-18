const isRed = (square) => square.colour === 'red'
const makeCircle = (square) => ({
  id: square.id,
  shape: 'circle',
  colour: square.colour,
  radius: square.sideLength / 11 * 2
})
const isShadeOfGreen = () => {}
const doubleDigitId = () => {}
const shortDescriptions = () => {}
const longDescriptions = () => {}

module.exports = {
  isRed,
  makeCircle,
  isShadeOfGreen,
  doubleDigitId,
  shortDescriptions,
  longDescriptions,
}
