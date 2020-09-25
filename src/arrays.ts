export function prependElement(arr: string[], newElement: string): string[] {
  arr.unshift(newElement)
  return arr
}

export function prependElementPure(arr: string[], newElement: string): string[] {
  const copy: string[] = [...arr]
  return prependElement(copy, newElement)
}

export function prepend2Elements(arr: string[], newElement: string, newElement2: string): string[] {
  arr.unshift(newElement, newElement2)
  return arr
}

export function appendElement(arr: string[], element: string): string[] {
  arr.push(element)
  return arr
}

export function append2Elements(arr: string[], element: string, element2: string): string[] {
  arr.push(element, element2)
  return arr
}

export function joinArrays(arr: string[], addArr: string[]): string[] {
  return arr.concat(addArr)
}

export function dequeueArray(arr: string[]): string[] {
  return arr.length === 0 ? [] : [arr.shift() as string]

  // const oneItemArray = []
  // firstElement = arr.shift()
  // oneItemArray.push(firstElement)
  // return oneItemArray
}

export function dequeue2FromArray(arr: string[]): string[] {
  return arr.splice(0, 2)
  // return [arr.shift(), arr.shift()]
}

export function truncateArray(arr: string[]): (string | undefined)[] {
  return [arr.pop()]
  // const oneItemArray = []
  // lastElement = arr.pop()
  // oneItemArray.push(lastElement)
  // return oneItemArray
}

export function truncate2FromArray(arr: string[]): string[] {
  return arr.splice(arr.length - 2, 2)
  // return [arr.pop(), arr.pop()].reverse()
}

export function areAllElementsBig(array: number[], n: number): boolean {
  return array.every((element: number): boolean => element > n)
}

export function hasBigElement(array: number[], n: number): boolean {
  return array.some((element: number): boolean => element > n)
}

export function oshifyArray(array: string[]): string[] {
  return array.fill('osh')
  // return array.map(() => 'osh')
}

export function oshifyArrayFromIndex(array: string[], from: number): string[] {
  return array.fill('osh', from)
  // return array.map((element, index) => index >= from ? 'osh' : element)
}

export function oshifyArrayInRange(array: string[], from: number, end: number): string[] {
  return array.fill('osh', from, end)
  // return array.map((element, index) => index >= from && end > index ? 'osh' : element)
}

export function shortlistAmazingElements(array: string[]): string[] {
  return array.filter((element: string): boolean => element === 'osh')
}

export function shortlistAmazingElementsWhichAreEven(array: string[]): string[] {
  return array.filter((element: string, index: number): boolean => element === 'osh' && index % 2 === 0)
}

export function shortlistAmazingElementsOnlyWhenTheyAreFollowedByGreatElement(array: string[]): string[] {
  return array.filter((element: string, index: number, array: string[]): boolean => element === 'osh' && array[index + 1] === 'adam')
}

export function trimArray(array: string[]): string[] {
  return array.map((element: string): string => element.trim())
}

export function dashArray(array: string[]): string[] {
  return array.map((currentValue: string, index: number): string => index % 2 === 0 ? `-${currentValue}-` : currentValue)
}

export function shoutAroundOsh(array: string[]): string[] {
  return [...array].map((currentValue: string, i: number, array: string[]): string => {
    if (array[i + 1] === 'osh') {
      return `${currentValue} !`
    }
    if (array[i - 1] === 'osh') {
      return `! ${currentValue}`
    }
    return currentValue
  })
  // const newArray = []
  // for (let i = 0; i < array.length; ++i) {
  //   const currentValue = array[i]
  //   const previousValue = array[i-1]
  //   const nextValue = array[i+1]

  //   if (nextValue === 'osh') {
  //     newArray.push(`${currentValue} !`)
  //   } else if (previousValue === 'osh') {
  //     newArray.push(`! ${currentValue}`)
  //   } else {
  //     newArray.push(currentValue)
  //   }
  // }
  // return newArray
}

export const sortNumbersAscending = (numbers: number[]) => void numbers.sort((a: number, b: number): number => a - b)

export const sortNumbersDescending = (numbers: number[]) => void numbers.sort((a: number, b: number): number => b - a)

export const sortStringsAscending = (strings: string[]) => void strings.sort((a: string, b: string): number => a.localeCompare(b))

export const sortStringsDescending = (strings: string[]) => void strings.sort((a: string, b: string): number => b.localeCompare(a))

export interface PlayerTopScore {
  topScore: number
}

export const sortPlayersByTopScoreDescending = (players: PlayerTopScore[]) => void players.sort((a: PlayerTopScore, b: PlayerTopScore): number => b.topScore - a.topScore)

export interface PlayerAvgScore {
  avgScore: number
}

export const sortPlayersByAvgScoreAscending = (players: PlayerAvgScore[]) => void players.sort((a: PlayerAvgScore, b: PlayerAvgScore): number => a.avgScore - b.avgScore)

export interface PlayersByWorstPermorming {
  topScore: number
  avgScore: number
}

export const sortPlayersByWorstPerforming = (players: PlayersByWorstPermorming[]) => void players.sort((a: PlayersByWorstPermorming, b: PlayersByWorstPermorming): number =>
  a.topScore === b.topScore ? b.avgScore - a.avgScore : a.topScore - b.topScore
)

export const sortPlayersByTopScoreAscending = (players: PlayerTopScore[]) => {
  sortPlayersByTopScoreDescending(players)
  players.reverse()
}

export const sortPlayersByAvgScoreDescending = (players: PlayerAvgScore[]) => {
  sortPlayersByAvgScoreAscending(players)
  players.reverse()
}

// pure functions
export function sortNumbersAscendingPure(numbers: number[]): number[] {
  return [...numbers].sort((a: number, b: number): number => a - b)
}

export function sortNumbersDescendingPure(numbers: number[]): number[] {
  return [...numbers].sort((a: number, b: number): number => b - a)
}

export function sortStringsAscendingPure(strings: string[]): string[] {
  return [...strings].sort((a: string, b: string): number => a.localeCompare(b))
}

export function sortStringsDescendingPure(strings: string[]): string[] {
  return [...strings].sort((a: string, b: string): number => b.localeCompare(a))
}

export function sortPlayersByTopScoreDescendingPure(players: PlayerTopScore[]): PlayerTopScore[] {
  return [...players].sort((a: PlayerTopScore, b: PlayerTopScore): number => b.topScore - a.topScore)
}

export function sortPlayersByTopScoreAscendingPure(players: PlayerTopScore[]): PlayerTopScore[] {
  return [...players].sort((a: PlayerTopScore, b: PlayerTopScore): number => a.topScore - b.topScore)
}

export function sortPlayersByAvgScoreAscendingPure(players: PlayerAvgScore[]): PlayerAvgScore[] {
  return [...players].sort((a: PlayerAvgScore, b: PlayerAvgScore): number => a.avgScore - b.avgScore)
}

export function sortPlayersByAvgScoreDescendingPure(players: PlayerAvgScore[]): PlayerAvgScore[] {
  return [...players].sort((a: PlayerAvgScore, b: PlayerAvgScore): number => b.avgScore - a.avgScore)
}

export function sortPlayersByWorstPerformingPure(players: PlayersByWorstPermorming[]): PlayersByWorstPermorming[] {
  return [...players].sort((a: PlayersByWorstPermorming, b: PlayersByWorstPermorming): number =>
    a.topScore === b.topScore ? b.avgScore - a.avgScore : a.topScore - b.topScore
  )
}


/*
12 = 7 + 5
12 - 7 = 5
-7 = 5 - 12
-7 - 5 = -12

12 = 7 + 5
12 - 7 = 5
12 - 7 - 5 = 0
*/

/* Pure functions vs input mutating functions

const myNumbers = [4, 1, 2, 3]
const toBeMutated =[...myNumbers]
sortNumbersAscending(toBeMutated)
// myNumbers = [4, 1, 2, 3]
// toBeSrted = [1, 2, 3, 4]

let myNumbers = [4, 1, 2, 3]
myNumbers = sortNumbersAscendingPure(toBeSorted)
// myNumbers = [1, 2, 3, 4]

Advatanges of pure functions
- easier to test and use in separation

Advatages of mutating functions
- memory efficient, particularly visible on big data sets like sorting arrays

In JavaScript, it's not immediately clean if a export function is mutating the input or not.
Requires knowledge of the implementation
When creating mutating functions, if you don't return the result of the operation,
it's clear that the input was mutated, e.g.:
sorting requires changing order, when a export function does not return the sorted input,
it becomes obvious that the input was mutated.
When a export function returns a result of operation, it's easy to assume that the input was not mutated,
but this is not necessarily true. e.g.: the built in Array.prototype.sort function
mutates the input to be memory efficient, but on top of that it returns the result for convenience.

*/

/*
SLICE VS SPLICE
slice(start, end)
splice(start[, deleteCount[, itemToAdd1[, [itemToAdd2[, ...]]]]])
*/

export function removeAllFromIndex(array: string[], index: number): string[] {
  return array.slice(0, index)
  // const copy = [...array]
  // copy.splice(index)
  // return copy
}

export function removeAllFromElementNumberCountingFromEnd(array: string[], elementFromTheEnd: number): string[] {
  return array.slice(0, array.length - elementFromTheEnd)
  // const copy = [...array]
  // copy.splice(array.length - elementFromTheEnd)
  // return copy
}

/*
const cake = [1, 2, 3]
const oshsSlice = cake.slice(0, 1)
const adamsSlice = cake.slice(1, 2)
const nelasSlice = cake.slice(2, 3)
*/

export function removeSomeFromIndex(array: string[], index: number, elementsToRemoveCount: number): string[] {
  const copy = [...array]
  copy.splice(index, elementsToRemoveCount)
  return copy
  // return array.slice(0, index).concat(array.slice(index + elementsToRemoveCount))
}

export function removeSomeFromElementNumberCountingFromEnd(array: string[], elementFromTheEnd: number, elementCount: number): string[] {
  const copy = [...array]
  copy.splice(array.length - elementFromTheEnd, elementCount)
  return copy
  // return array.slice(0, array.length - elementFromTheEnd).concat(array.slice(array.length - elementFromTheEnd + elementCount))
}

export function removeSomeElementsFromIndexToIndex(input, from, to) {
  const copy = [...input]
  copy.splice(from, to - from)
  return copy
}

export function removeSomeElementsFromIndexToIndex2(input, from, to) {
  const copy = [...input]
  copy.splice(from, to - from + 1)
  return copy
}
