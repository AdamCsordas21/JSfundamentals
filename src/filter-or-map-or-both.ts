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

export const isShadeOfGreen = ({ colour }: { colour: string }): boolean => colour.includes('green')

export const isShadeOfBlue = ({ colour }: { colour: string }): boolean => colour.includes('blue')

export const doubleDigitId = ({ id, sideLength, colour }: 
  { id: string, sideLength: number, colour: string }) 
  : { id: string, shape: string, sideLength: number, colour: string } => ({
  id: id.padStart(2, '0'),
  shape: 'square',
  sideLength,
  colour
})

export const shortDescriptions = ({ colour }: { colour: string }): string => colour.length >= 8 ? `${colour.substring(0, 5)}...` : colour

export const longDescriptions = ({ colour }: { colour: string }): boolean => colour.length > 8
