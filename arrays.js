function prependElement(arr) {
  arr.unshift('great')
  return arr
}

function prepend2Elements(arr) {
  arr.unshift('the', 'great')
  return arr
}

function appendElement(arr) {
  arr.push('!')
  return arr
}

function append2Elements(arr) {
  arr.push('!', '!')
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

module.exports = {
  prependElement,
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
}