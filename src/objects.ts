/*
const test = {
  name: 'adam',
  age: 123,
  getAge: () => this.age,
  getName() {
    return this.name
  },
  address: {
    line1: 'Flat 0.5',
    line2: 'Super long Street',
    city: 'Adaminsky',
    postcode: 007,
  }
}
const thisIsAlsoAnObject = null
const thisIsANumberObject = new Number(3)
const thisIsAStringObject = new String('hello')

test.name
test.age
test.getAge()
test.getName()
test.address.line1

const copyOfArray = [...array]
const copyOfObject = {...object}

const myNumbers = [3, 6, 2]
// const second = myNumbers[1]
const [first, myFav, third] = myNumbers
const [, second] = myNumbers

// const testName = test.name
const { first: name } = test

test.age = 12


*/

export interface Person {
  name: string
  address: {
    street: string
  }
}

export function createShallowCopyOfPerson(person: Person): Person {
  return { ...person }
}

export function createDeepCopyOfPerson(person: Person): Person {
  return { ...person, address: { ...person.address } }
}

export function listProperties(object: {}): string[] {
  // @see https://stackoverflow.com/a/22658584/4514601 for the difference
  return Object.keys(object)
  // return Object.getOwnPropertyNames(object)
}

export function describeProps(object: {}): string {
  const keys = Object.keys(object)
  return `This object has ${keys.length} props: ${keys.join(', ')}`
}

export function doubleProps<T extends Record<string, number>>(object: T): T {
  const doubled = {} as T
  for (const key in object) {
    doubled[key] = object[key] * 2 as T[Extract<keyof T, string>]
  }
  // for (const key of Object.keys(object)) {
  //   object[key] = object[key] * 2
  // }
  return doubled
}

export function tripleProps(object: Record<string, number>): Record<string, number> {
  const copy = { ...object }
  for (const key in object) {
    copy[key] = object[key] * 3
  }
  return copy
}

export function listPropertyValues<T>(object: Record<any, T>): T[] {
  return Object.values(object)
}

export function describePropValues(object: Record<string, any>): string {
  const values = Object.values(object)
  const count = values.length
  const lastValue = values.pop() // const lastValue = values[values.length - 1]
  const valuesList = `${values.join(', ')} and ${lastValue}`

  return `This object has ${count} props, with values: ${valuesList}`
}

export function sumDoubledValues(object: Record<any, number>): number {
  let sum = 0
  // for (const value in object) {
  //   sum += value * 2
  // }
  for (const value of Object.values(object)) {
    sum += value * 2
  }
  return sum
}

export function sumTripleProps(object: Record<any, number>): number {
  let sum = 0
  for (const value of Object.values(object)) {
    sum += value * 3
  }
  return sum
}

function joinRestWithLast(rest: string[] | number[], last: string[] | number[], restJoiner: string, lastJoiner: string): string {
  return [rest.join(restJoiner), last].filter((e) => e !== '').join(lastJoiner)
}

function joinItems(items: string[] | number[], restJoiner: string, lastJoiner: string) {
  const lastIndex = items.length - 1
  return joinRestWithLast(items.slice(0, lastIndex), items.slice(lastIndex), restJoiner, lastJoiner)
}

export function quote(maybeString: any): any {
  return typeof maybeString === "string" ? `"${maybeString}"` : maybeString
}

export function describeObjectPropsAndValues(input: Record<string, number>): string {
  // const keys = Object.keys(input).map((key) => `"${key}"`)
  // const lastKey = keys.pop()
  // const keysString = [keys.join(', '), lastKey].filter((key) => key !== '').join(' and ')

  // const values = Object.values(input)
  // const lastValue = values.pop()
  // const valuesString = [values.join('", "'), lastValue].filter((value) => value !== '').join('" and "')

  const keys: string[] = Object.keys(input).map(quote)
  const keysString = joinItems(keys, ', ', ' and ')

  const values: number[] = Object.values(input)
  const valuesString = joinItems(values, '", "', '" and "')

  return `The object props are ${keysString} and the values are "${valuesString}"`
}

export function describeObject(object: {}, q: (maybeString: any) => any): string {
  const pairs: [string, unknown][] = Object.entries(object) // pairs = [["a", 1], ["b", "2"], ["c", false], ["d", null]]
  const descriptions: string[] = pairs.map(([key, value]) => `${q(key)}: ${q(value)}`)
  return `The object has ${pairs.length} ${pairs.length === 1 ? 'property' : 'properties'}: { ${descriptions.join(", ")} }`
}

export function checkValueForNumber(input: {}): string {
  const isValidNumber = (tuple: [string, unknown]): tuple is [string, number] => {
    const [, value] = tuple
    return typeof value === 'number' && !isNaN(value) && isFinite(value)
  }
  const describeAndDoubleNumber = ([key, value]: [string, number]): string => `${key}: ${value} -> ${(value * 2)}`
  const numbersDescription = Object.entries(input)
    .filter(isValidNumber)
    .map(describeAndDoubleNumber)
    .join(', ')
  return `I found these values as numbers and doubled them: { ${numbersDescription} }`
}
