function prependElement(arr, newElement) {
  arr.unshift(newElement)
  return arr
}

function prependElementPure(arr, newElement) {
  const copy = [...arr]
  return prependElement(copy, newElement)
}

function prepend2Elements(arr, newElement, newElement2) {
  arr.unshift(newElement, newElement2)
  return arr
}

function appendElement(arr, element) {
  arr.push(element)
  return arr
}

function append2Elements(arr, element, element2) {
  arr.push(element, element2)
  return arr
}

function joinArrays(arr, addArr) {
  return arr.concat(addArr)
}

function dequeueArray(arr) {
  return [arr.shift()]
  // const oneItemArray = []
  // firstElement = arr.shift()
  // oneItemArray.push(firstElement)
  // return oneItemArray
}

function dequeue2FromArray(arr) {
  return arr.splice(0, 2)
  // return [arr.shift(), arr.shift()]
}

function truncateArray(arr) {
  return [arr.pop()]
  // const oneItemArray = []
  // lastElement = arr.pop()
  // oneItemArray.push(lastElement)
  // return oneItemArray
}

function truncate2FromArray(arr) {
  return arr.splice(arr.length - 2, 2)
  // return [arr.pop(), arr.pop()].reverse()
}

function areAllElementsBig(array, n) {
  return array.every((element) => element > n)
}

function hasBigElement(array, n) {
  return array.some((element) => element > n)
}

function oshifyArray(array) {
  return array.fill('osh')
  // return array.map(() => 'osh')
}

function oshifyArrayFromIndex(array, from) {
  return array.fill('osh', from)
  // return array.map((element, index) => index >= from ? 'osh' : element)
}

function oshifyArrayInRange(array, from, end) {
  return array.fill('osh', from, end)
  // return array.map((element, index) => index >= from && end > index ? 'osh' : element)
}

function shortlistAmazingElements(array) {
  return array.filter((element) => element === 'osh')
}

function shortlistAmazingElementsWhichAreEven(array) {
  return array.filter((element, index) => element === 'osh' && index % 2 === 0)
}

function shortlistAmazingElementsOnlyWhenTheyAreFollowedByGreatElement(array) {
  return array.filter((element, index, array) => element === 'osh' && array[index + 1] === 'adam')
}

function trimArray(array) {
  return array.map((element) => element.trim())
}

function dashArray(array) {
  return array.map((currentValue, index) => index % 2 === 0 ? `-${currentValue}-` : currentValue)
}

function shoutAroundOsh(array) {
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

const sortNumbersAscending = (numbers) => void numbers.sort((a, b) => a - b)

const sortNumbersDescending = (numbers) => void numbers.sort((a, b) => b - a)

const sortStringsAscending = (strings) => void strings.sort((a, b) => a.localeCompare(b))

const sortStringsDescending = (strings) => void strings.sort((a, b) => b.localeCompare(a))

const sortPlayersByTopScoreDescending = (players) => void players.sort((a, b) => b.topScore - a.topScore)

const sortPlayersByAvgScoreAscending = (players) => void players.sort((a, b) => a.avgScore - b.avgScore)

const sortPlayersByWorstPerforming = (players) => void players.sort((a, b) =>
  a.topScore === b.topScore ? b.avgScore - a.avgScore : a.topScore - b.topScore
)

const sortPlayersByTopScoreAscending = (players) => {
  sortPlayersByTopScoreDescending(players)
  players.reverse()
}

const sortPlayersByAvgScoreDescending = (players) => {
  sortPlayersByAvgScoreAscending(players)
  players.reverse()
}

// pure functions
function sortNumbersAscendingPure(numbers) {
  return [...numbers].sort((a, b) => a - b)
}

function sortNumbersDescendingPure(numbers) {
  return [...numbers].sort((a, b) => b - a)
}

function sortStringsAscendingPure(strings) {
  return [...strings].sort((a, b) => a.localeCompare(b))
}

function sortStringsDescendingPure(strings) {
  return [...strings].sort((a, b) => b.localeCompare(a))
}

function sortPlayersByTopScoreDescendingPure(players) {
  return [...players].sort((a, b) => b.topScore - a.topScore)
}

function sortPlayersByTopScoreAscendingPure(players) {
  return [...players].sort((a, b) => a.topScore - b.topScore)
}

function sortPlayersByAvgScoreAscendingPure(players) {
  return [...players].sort((a, b) => a.avgScore - b.avgScore)
}

function sortPlayersByAvgScoreDescendingPure(players) {
  return [...players].sort((a, b) => b.avgScore - a.avgScore)
}

function sortPlayersByWorstPerformingPure(players) {
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

module.exports = {
  prependElement,
  prependElementPure,
  prepend2Elements,
  appendElement,
  append2Elements,
  joinArrays,
  dequeueArray,
  dequeue2FromArray,
  truncateArray,
  truncate2FromArray,
  areAllElementsBig,
  hasBigElement,
  oshifyArray,
  oshifyArrayFromIndex,
  oshifyArrayInRange,
  shortlistAmazingElements,
  shortlistAmazingElementsWhichAreEven,
  shortlistAmazingElementsOnlyWhenTheyAreFollowedByGreatElement,
  trimArray,
  dashArray,
  shoutAroundOsh,
  sortNumbersAscending,
  sortNumbersDescending,
  sortStringsAscending,
  sortStringsDescending,
  sortPlayersByTopScoreDescending,
  sortPlayersByAvgScoreAscending,
  sortPlayersByWorstPerforming,
  sortPlayersByTopScoreAscending,
  sortPlayersByAvgScoreDescending,
  sortNumbersAscendingPure,
  sortNumbersDescendingPure,
  sortStringsAscendingPure,
  sortStringsDescendingPure,
  sortPlayersByTopScoreDescendingPure,
  sortPlayersByTopScoreAscendingPure,
  sortPlayersByAvgScoreAscendingPure,
  sortPlayersByAvgScoreDescendingPure,
  sortPlayersByWorstPerformingPure,
}