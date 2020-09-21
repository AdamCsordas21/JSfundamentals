export const isRed = ({ colour }: { colour: string }): boolean => colour === 'red'

export const isBlue = ({ colour }: { colour: string }): boolean => colour === 'blue'

export const makeCircle = ({ id, colour, sideLength }:
  { id: string, colour: string, sideLength: number })
  : { id: string, colour: string, shape: string, radius: number } => ({
    id,
    colour,
    shape: 'circle',
    radius: sideLength / 11 * 2
  })

export const isShadeOfGreen = ({ colour }) => colour.includes('green')

export const isShadeOfBlue = ({ colour }) => colour.includes('blue')

export const doubleDigitId = ({ id, sideLength, colour }) => ({
  id: id.padStart(2, '0'),
  shape: 'square',
  sideLength,
  colour
})

export const shortDescriptions = ({ colour }) => colour.length >= 8 ? `${colour.substring(0, 5)}...` : colour

export const longDescriptions = ({ colour }) => colour.length > 8

module.exports = {
  isRed,
  isBlue,
  makeCircle,
  isShadeOfGreen,
  isShadeOfBlue,
  doubleDigitId,
  shortDescriptions,
  longDescriptions,
}
