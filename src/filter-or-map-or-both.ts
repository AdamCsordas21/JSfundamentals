interface Colour {
  colour: string
}

export const isRed = ({ colour }: Colour): boolean => colour === 'red'

export const isBlue = ({ colour }: Colour): boolean => colour === 'blue'

export const makeCircle = ({ id, colour, sideLength }) => ({
    id,
    colour,
    shape: 'circle',
    radius: sideLength / 11 * 2
  })

export const isShadeOfGreen = ({ colour }: Colour): boolean => colour.includes('green')

export const isShadeOfBlue = ({ colour }: Colour): boolean => colour.includes('blue')

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
