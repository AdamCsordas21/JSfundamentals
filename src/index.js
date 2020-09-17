// HOMEWORK 3.
function filterHighSkillLevelPlayers(arr) {
  const highSkilled = [];
  for (const element of arr) {
    if (element < 1400) {
      highSkilled.push('Low skill level - Play!')
    } else {
      highSkilled.push('High skill level - Avoid!')
    }
  }
  return highSkilled
}

function isScoreHigh() {
  return 
}


function __integerDescriptorOfList(arr) {
  const integers = [];
  for (const i of arr) {
    integers.push(integerDescriptor(i))
  }
  return integers
}

function integerDescriptorOfList(arr) {
  return arr.map(integerDescriptor)
}


function integerDescriptor(integer) {
  let description = ""
  if (Math.abs(integer) > 100) {
    description += "big"
  } else {
    description += "small"
  }
  if (integer > 0) {
    description += " positive"
  } else if (integer < 0) {
    description += " negative"
  }
  if (integer % 2 === 0) {
    description += " even number"
  } else {
    description += " odd number"
  }
  return description
}



function hello(a, b, c) {
  if (a > 0) {
    console.log('a is bigger than zero')
  } else {
    console.log('a is not bigger than zero')
  }

  if (b > 10) {
    console.log('b is bigger than 10')
  }

  if (c === "osh") {
    console.log('c was osh')
  }
}




function miniFizzBuzz(arr) {
  const miniFizzBuzzed = [];
  for (const number of arr) {
    if (number % 2 === 0 && number % 3 === 0) {
      miniFizzBuzzed.push("fizzbuzz")
    } else if (number % 3 === 0) {
      miniFizzBuzzed.push("buzz")
    } else if (number % 2 === 0) {
      miniFizzBuzzed.push("fizz")
    } else {
      miniFizzBuzzed.push(number)
    }
  }
  return miniFizzBuzzed
}

function oshWasHere(arr) {
  const message = [];
  for (const number of arr) {
    if (number > 10) {
      message.push("!")
    } else if (number % 8 === 0) {
      message.push("here")
    } else if (number % 4 === 0) {
      message.push("was")
    } else if (number % 2 === 0) {
      message.push("osh")
    } else {
      message.push(number)
    }
  }
  return message
}

function fizzBuzz(arr) {
  const fizzbuzzed = [];
  for (const number of arr) {
    if (number % 3 === 0 && number % 5 === 0) {
      fizzbuzzed.push("fizzbuzz")
    } else if (number % 5 === 0) {
      fizzbuzzed.push("buzz")
    } else if (number % 3 === 0) {
      fizzbuzzed.push("fizz")
    } else {
      fizzbuzzed.push(number)
    }
  }
  return fizzbuzzed
}

// 1 % 3  -> 0.333  -> 3 x 0 = 0  -> 1 - 0 = 1
// 2 % 3  -> 0.666  -> 3 x 0 = 0  -> 2 - 0 = 2
// 3 % 3  -> 1      -> 3 x 1 = 3  -> 3 - 3 = 0
// 4 % 3  -> 1.333  -> 3 x 1 = 3  -> 4 - 3 = 1
// 5 % 3  -> 1.666  -> 3 x 1 = 3  -> 5 - 3 = 2
// 6 % 3  -> 2      -> 3 x 2 = 6  -> 6 - 6 = 0

// 4 % 5  -> 0.__   -> 5 x 0 = 0  -> 4 - 0 = 4
// 8 % 5  -> 1.__   -> 5 x 1 = 5  -> 8 - 5 = 3

function _tripleEach(arr) {
  const tripled = [];
  for (const number of arr) {
    tripled.push(number * 3)
  }
  return tripled
}

function tripleEach(arr) {
  return map(arr, (number) => number * 3)
}

function _doubleEach(arr) {
  const doubled = [];
  for (const number of arr) {
    doubled.push(number * 2)
  }
  return doubled
}

function doubleEach(arr) {
  return map(arr, (number) => number * 2)
}


function _add1ToEach(arr) {
  const mapped = [];
  for (const element of arr) {
    mapped.push(element + 1)
  }
  return mapped
}

function add1ToEach(arr) {
  return map(arr, (element) => element + 1)
}

function _subtract2FromEach(arr) {
  const mapped = [];
  for (const element of arr) {
    mapped.push(element - 2)
  }
  return mapped
}

function subtract2FromEach(arr) {
  return map(arr, (element) => element - 2)
}

function map(arr, mapper) {
  const mapped = [];
  for (const element of arr) {
    mapped.push(mapper(element))
  }
  return mapped
}


function _filterHigherOrEqualTo10(arr) {
  const filtered = [];
  for (const element of arr) {
    if (element >= 10) {
      filtered.push(element)
    }
  }
  return filtered
}

const filterHigherOrEqualTo10 = (arr) => arr.filter((element) => element >= 10)

function _filterMultiplesOf3(arr) {
  const filtered = [];
  for (const element of arr) {
    if (element % 3 === 0) {
      filtered.push(element)
    }
  }
  return filtered
}

function filterMultiplesOf3(arr) {
  return filter(arr, (element) => element % 3 === 0)
}

function _filterHigherThan2(arr) {
  const filtered = [];
  for (const element of arr) {
    if (element > 2) {
      filtered.push(element)
    }
  }
  return filtered
}

function __filterHigherThan2(arr) {
  return filter(arr, (element) => element > 2)
}

function filterHigherThan2(arr) {
  return arr.filter((element) => element > 2)
}

function _filterLowerThan2(arr) {
  const filtered = [];
  for (const element of arr) {
    if (element < 2) {
      filtered.push(element)
    }
  }
  return filtered
}

function filterLowerThan2(arr) {
  return filter(arr, (element) => element < 2)
}

function _filterOutOddNumbers(arr) {
  const filtered = [];
  for (const element of arr) {
    if (element % 2 === 0) {
      filtered.push(element)
    }
  }
  return filtered
}

function filterOutOddNumbers(arr) {
  return filter(arr, (element) => element % 2 === 0)
}

function filter(arr, predicament) {
  const filtered = [];
  for (const element of arr) {
    if (predicament(element)) {
      filtered.push(element)
    }
  }
  return filtered
}

module.exports = {
  filterHigherThan2,
  filterLowerThan2,
  filterOutOddNumbers,
  filter,
  filterMultiplesOf3,
  filterHigherOrEqualTo10,
  add1ToEach,
  subtract2FromEach,
  doubleEach,
  tripleEach,
  fizzBuzz,
  miniFizzBuzz,
  oshWasHere,
  integerDescriptorOfList,
  integerDescriptor,
  filterHighSkillLevelPlayers,
  isScoreHigh
}