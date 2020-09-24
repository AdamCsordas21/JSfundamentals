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

export function dequeueArray(arr: string[]): (string | undefined)[] {
  return [arr.shift()]
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

export function oshifyArrayInRange(array, from, end) {
  return array.fill('osh', from, end)
  // return array.map((element, index) => index >= from && end > index ? 'osh' : element)
}

export function shortlistAmazingElements(array) {
  return array.filter((element) => element === 'osh')
}

export function shortlistAmazingElementsWhichAreEven(array) {
  return array.filter((element, index) => element === 'osh' && index % 2 === 0)
}

export function shortlistAmazingElementsOnlyWhenTheyAreFollowedByGreatElement(array) {
  return array.filter((element, index, array) => element === 'osh' && array[index + 1] === 'adam')
}

export function trimArray(array) {
  return array.map((element) => element.trim())
}

export function dashArray(array) {
  return array.map((currentValue, index) => index % 2 === 0 ? `-${currentValue}-` : currentValue)
}

export function shoutAroundOsh(array) {
  return [...array].map((currentValue, i, array) => {
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

export const sortNumbersAscending = (numbers) => void numbers.sort((a, b) => a - b)

export const sortNumbersDescending = (numbers) => void numbers.sort((a, b) => b - a)

export const sortStringsAscending = (strings) => void strings.sort((a, b) => a.localeCompare(b))

export const sortStringsDescending = (strings) => void strings.sort((a, b) => b.localeCompare(a))

export const sortPlayersByTopScoreDescending = (players) => void players.sort((a, b) => b.topScore - a.topScore)

export const sortPlayersByAvgScoreAscending = (players) => void players.sort((a, b) => a.avgScore - b.avgScore)

export const sortPlayersByWorstPerforming = (players) => void players.sort((a, b) =>
  a.topScore === b.topScore ? b.avgScore - a.avgScore : a.topScore - b.topScore
)

export const sortPlayersByTopScoreAscending = (players) => {
  sortPlayersByTopScoreDescending(players)
  players.reverse()
}

export const sortPlayersByAvgScoreDescending = (players) => {
  sortPlayersByAvgScoreAscending(players)
  players.reverse()
}

// pure functions
export function sortNumbersAscendingPure(numbers) {
  return [...numbers].sort((a, b) => a - b)
}

export function sortNumbersDescendingPure(numbers) {
  return [...numbers].sort((a, b) => b - a)
}

export function sortStringsAscendingPure(strings) {
  return [...strings].sort((a, b) => a.localeCompare(b))
}

export function sortStringsDescendingPure(strings) {
  return [...strings].sort((a, b) => b.localeCompare(a))
}

export function sortPlayersByTopScoreDescendingPure(players) {
  return [...players].sort((a, b) => b.topScore - a.topScore)
}

export function sortPlayersByTopScoreAscendingPure(players) {
  return [...players].sort((a, b) => a.topScore - b.topScore)
}

export function sortPlayersByAvgScoreAscendingPure(players) {
  return [...players].sort((a, b) => a.avgScore - b.avgScore)
}

export function sortPlayersByAvgScoreDescendingPure(players) {
  return [...players].sort((a, b) => b.avgScore - a.avgScore)
}

export function sortPlayersByWorstPerformingPure(players) {
  return [...players].sort((a, b) =>
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

export function removeAllFromIndex(array, index) {
  return array.slice(0, index)
  // const copy = [...array]
  // copy.splice(index)
  // return copy
}

export function removeAllFromElementNumberCountingFromEnd(array, elementFromTheEnd) {
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

export function removeSomeFromIndex(array, index, elementsToRemoveCount) {
  const copy = [...array]
  copy.splice(index, elementsToRemoveCount)
  return copy
  // return array.slice(0, index).concat(array.slice(index + elementsToRemoveCount))
}

export function removeSomeFromElementNumberCountingFromEnd(array, elementFromTheEnd, elementCount) {
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
