import {
  Square,
  Circle
} from "./filter-or-map-or-both"

export const addNumbers = (numbers: number[]): number => {
  return numbers.reduce((sum: number, number: number): number => sum + number)
  // let sum = 0
  // for (export const number of numbers) {
  //   sum += number
  // }
  // return sum
}

export interface Flower {
  petals: any[]
}

export const doesLoveOrNot = ({ petals }: Flower): 'loves' | 'does not' => {
  return petals.reduce((loves: boolean): boolean => !loves, true) ? 'loves' : 'does not'
  // return petals.length % 2 === 0 ? 'loves' : 'does not'
}

export type Figure = Circle | Square

export const shapeToCirclesArea = (totalArea: number, figure: Figure): number => {
  if (figure.shape === 'circle' && figure.colour.includes('blue')) {
    totalArea += figure.radius * figure.radius * Math.PI
  }
  return totalArea
}

export const totalAreaOfRedSquaresReducer = (totalArea: number, figure: Figure): number => {
  if (figure.shape === 'square' && figure.colour.includes('red')) {
    totalArea += figure.sideLength * figure.sideLength
  }
  return totalArea
}

export const isRed = (bigRedSquares: Figure[], figure: Figure): Figure[] => {
  if (figure.shape === 'square' && figure.colour.includes('red')) {
    bigRedSquares.push({ ...figure, sideLength: figure.sideLength * 2 })
  }
  return bigRedSquares
}

export const roundTheEdges = (accumulator: Circle[], figure: Figure): Circle[] => accumulator.concat({
  id: figure.id,
  colour: figure.colour,
  shape: 'circle',
  radius: figure.shape === 'square' ? figure.sideLength * 2 : figure.radius,
})

export const roundTheEdges2 = (figure: Figure): Circle => ({
  id: figure.id,
  colour: figure.colour,
  shape: 'circle',
  radius: figure.shape === 'square' ? figure.sideLength * 2 : figure.radius,
})

interface EvenAndOdds {
  even: number
  odd: number
}

export const countEvenAndOdd = (numbers: number[]): string => {
  // export const even = numbers.filter((n) => n % 2 === 0).length
  // export const odd = numbers.length - even
  const { even, odd }: EvenAndOdds = numbers.reduce((acc: EvenAndOdds, number: number): EvenAndOdds => {
    acc[number % 2 === 0 ? 'even' : 'odd']++
    return acc
  }, { even: 0, odd: 0 })
  return `There was ${even} even and ${odd} odd numbers`
}
