const isRed = ({ colour }) => colour === 'red'

const makeCircle = ({ id, colour, sideLength }) => ({
  id,
  colour,
  shape: 'circle',
  radius: sideLength / 11 * 2
})


const isShadeOfGreen = ({ colour }) => colour.includes('green')

const doubleDigitId = ({ id, sideLength, colour }) => ({
  id: id.padStart(2, '0'),
  shape: 'square',
  sideLength,
  colour
})

const shortDescriptions = ({ colour }) => colour.length >= 8 ? `${colour.substring(0, 5)}...` : colour

const longDescriptions = ({ colour }) => colour.length > 8

module.exports = {
  isRed,
  makeCircle,
  isShadeOfGreen,
  doubleDigitId,
  shortDescriptions,
  longDescriptions,
}
