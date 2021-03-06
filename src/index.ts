// HOMEWORK 3.
export function filterHighSkillLevelPlayers(arr: number[]): string[] {
  const highSkilled: string[] = [];
  for (const element of arr) {
    if (element < 1400) {
      highSkilled.push('Low skill level - Play!')
    } else {
      highSkilled.push('High skill level - Avoid!')
    }
  }
  return highSkilled
}

function __integerDescriptorOfList(arr: number[]): string[] {
  const integers: string[] = [];
  for (const i of arr) {
    integers.push(integerDescriptor(i))
  }
  return integers
}

export function integerDescriptorOfList(arr: number[]): string[] {
  return arr.map(integerDescriptor)
}

function integerDescriptor(integer: number): string {
  let description: string = ""
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



export function hello(a: number, b: number, c: string): void {
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

export type Osh = 'osh' | 'was' | 'here' | '!' | number

export function oshWasHere(arr: number[]): Osh[] {
  const message: Osh[] = [];
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

export type FizzBuzz = 'fizz' | 'buzz' | 'fizzbuzz' | number

export function fizzBuzz(arr: number[]): FizzBuzz[] {
  const fizzbuzzed: FizzBuzz[] = [];
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

export function miniFizzBuzz(arr: number[]): FizzBuzz[] {
  const miniFizzBuzzed: FizzBuzz[] = [];
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

// 1 % 3  -> 0.333  -> 3 x 0 = 0  -> 1 - 0 = 1
// 2 % 3  -> 0.666  -> 3 x 0 = 0  -> 2 - 0 = 2
// 3 % 3  -> 1      -> 3 x 1 = 3  -> 3 - 3 = 0
// 4 % 3  -> 1.333  -> 3 x 1 = 3  -> 4 - 3 = 1
// 5 % 3  -> 1.666  -> 3 x 1 = 3  -> 5 - 3 = 2
// 6 % 3  -> 2      -> 3 x 2 = 6  -> 6 - 6 = 0

// 4 % 5  -> 0.__   -> 5 x 0 = 0  -> 4 - 0 = 4
// 8 % 5  -> 1.__   -> 5 x 1 = 5  -> 8 - 5 = 3

export function _tripleEach(arr: number[]): number[] {
  const tripled: number[] = [];
  for (const number of arr) {
    tripled.push(number * 3)
  }
  return tripled
}

export function tripleEach(arr: number[]): number[] {
  return map(arr, (number: number): number => number * 3)
}

export function _doubleEach(arr: number[]): number[] {
  const doubled: number[] = [];
  for (const number of arr) {
    doubled.push(number * 2)
  }
  return doubled
}

export function doubleEach(arr: number[]): number[] {
  return map(arr, (number: number): number => number * 2)
}


export function _add1ToEach(arr: number[]): number[] {
  const mapped: number[] = [];
  for (const element of arr) {
    mapped.push(element + 1)
  }
  return mapped
}

export function add1ToEach(arr: number[]): number[] {
  return map(arr, (element: number): number => element + 1)
}

export function _subtract2FromEach(arr: number[]): number[] {
  const mapped: number[] = [];
  for (const element of arr) {
    mapped.push(element - 2)
  }
  return mapped
}

export function subtract2FromEach(arr: number[]): number[] {
  return map(arr, (element: number): number => element - 2)
}

export function map<T, U>(arr: T[], mapper: (element: T) => U): U[] {
  const mapped: U[] = [];
  for (const element of arr) {
    mapped.push(mapper(element))
  }
  return mapped
}


export function _filterHigherOrEqualTo10(arr: number[]): number[] {
  const filtered: number[] = [];
  for (const element of arr) {
    if (element >= 10) {
      filtered.push(element)
    }
  }
  return filtered
}

export const filterHigherOrEqualTo10 = (arr: number[]): number[] => arr.filter((element: number): boolean => element >= 10)

export function _filterMultiplesOf3(arr: number[]): number[] {
  const filtered: number[] = [];
  for (const element of arr) {
    if (element % 3 === 0) {
      filtered.push(element)
    }
  }
  return filtered
}

export function filterMultiplesOf3(arr: number[]): number[] {
  return filter(arr, (element: number): boolean => element % 3 === 0)
}

function _filterHigherThan2(arr: number[]): number[] {
  const filtered: number[] = [];
  for (const element of arr) {
    if (element > 2) {
      filtered.push(element)
    }
  }
  return filtered
}

function __filterHigherThan2(arr: number[]): number[] {
  return filter(arr, (element: number): boolean => element > 2)
}

export function filterHigherThan2(arr: number[]): number[] {
  return arr.filter((element: number): boolean => element > 2)
}

function _filterLowerThan2(arr: number[]): number[] {
  const filtered: number[] = [];
  for (const element of arr) {
    if (element < 2) {
      filtered.push(element)
    }
  }
  return filtered
}

export function filterLowerThan2(arr: number[]): number[] {
  return filter(arr, (element: number): boolean => element < 2)
}

function _filterOutOddNumbers(arr: number[]): number[] {
  const filtered: number[] = [];
  for (const element of arr) {
    if (element % 2 === 0) {
      filtered.push(element)
    }
  }
  return filtered
}

export function filterOutOddNumbers(arr: number[]): number[] {
  return filter(arr, (element: number): boolean => element % 2 === 0)
}

export function filter<T>(arr: T[], predicate: (element: T) => boolean): T[] {
  const filtered: T[] = [];
  for (const element of arr) {
    if (predicate(element)) {
      filtered.push(element)
    }
  }
  return filtered
}
