interface Colour {
  colour: string
}

export const isRed = ({ colour }: Colour): boolean => colour === 'red'

export const isBlue = ({ colour }: Colour): boolean => colour === 'blue'

export interface Circle {
  id: string
  colour: string
  shape: 'circle'
  radius: number
}
interface CircleConstructorParams {
  id: string
  colour: string
  sideLength: number
}

export const makeCircle = ({ id, colour, sideLength }: CircleConstructorParams): Circle => ({
  id,
  colour,
  shape: 'circle',
  radius: sideLength / 11 * 2
})

export const isShadeOfGreen = ({ colour }: Colour): boolean => colour.includes('green')

export const isShadeOfBlue = ({ colour }: Colour): boolean => colour.includes('blue')

export interface Square {
  id: string
  shape: 'square'
  sideLength: number
  colour: string
}

interface SquareConstructorParams {
  id: string
  sideLength: number
  colour: string
}

export const doubleDigitId = ({ id, sideLength, colour }: SquareConstructorParams): Square => ({
  id: id.padStart(2, '0'),
  shape: 'square',
  sideLength,
  colour
})

export const shortDescriptions = ({ colour }: Colour): string => colour.length >= 8 ? `${colour.substring(0, 5)}...` : colour

export const longDescriptions = ({ colour }: Colour): boolean => colour.length > 8
