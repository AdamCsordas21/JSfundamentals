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

function createShallowCopy(myObj) {
  return { ...myObj }
}

function createDeepCopy(myObj) {
  return { ...myObj, address: { ...myObj.address } }
}

function listProperties(object) {
  // @see https://stackoverflow.com/a/22658584/4514601 for the difference
  return Object.keys(object)
  // return Object.getOwnPropertyNames(object)
}

function describeProps(object) {
  const keys = Object.keys(object)
  return `This object has ${keys.length} props: ${keys.join(', ')}`
}

function doubleProps(object) {
  const doubled = {}
  for (const key in object) {
    doubled[key] = object[key] * 2
  }
  // for (const key of Object.keys(object)) {
  //   object[key] = object[key] * 2
  // }
  return doubled
}

function tripleProps(object) {
  const copy = { ...object }
  for (const key in object) {
    copy[key] = object[key] * 3
  }
  return copy
}

function listPropertyValues(object) {
  return Object.values(object)
}

function describePropValues(object) {
  const values = Object.values(object)
  const count = values.length
  const lastValue = values.pop() // const lastValue = values[values.length - 1]
  const valuesList = `${values.join(', ')} and ${lastValue}`

  return `This object has ${count} props, with values: ${valuesList}`
}

function sumDoubledValues(object) {
  let sum = 0
  // for (const value in object) {
  //   sum += value * 2
  // }
  for (const value of Object.values(object)) {
    sum += value * 2
  }
  return sum
}

function sumTripleProps(object) {
  let sum = 0
  for (const value of Object.values(object)) {
    sum += value * 3
  }
  return sum
}

function joinRestWithLast(rest, last, restJoiner, lastJoiner) {
  return [rest.join(restJoiner), last].filter((e) => e !== '').join(lastJoiner)
}

function joinItems(items, restJoiner, lastJoiner) {
  const lastIndex = items.length - 1
  return joinRestWithLast(items.slice(0, lastIndex), items.slice(lastIndex), restJoiner, lastJoiner)
}

function describeObjectPropsAndValues(input) {
  // const keys = Object.keys(input).map((key) => `"${key}"`)
  // const lastKey = keys.pop()
  // const keysString = [keys.join(', '), lastKey].filter((key) => key !== '').join(' and ')

  // const values = Object.values(input)
  // const lastValue = values.pop()
  // const valuesString = [values.join('", "'), lastValue].filter((value) => value !== '').join('" and "')

  const keys = Object.keys(input).map((k) => `"${k}"`)
  const keysString = joinItems(keys, ', ', ' and ')

  const values = Object.values(input)
  const valuesString = joinItems(values, '", "', '" and "')

  return `The object props are ${keysString} and the values are "${valuesString}"`
}

function describeObject(object) {
  const pairs = Object.entries(object) // pairs = [["a", 1], ["b", "2"], ["c", false], ["d", null]]
  const descriptions = []
  const prop = pairs.length === 1 ? 'property' : 'properties'
  for (const [key, value] of pairs) {
    if (typeof value === "string") {
      descriptions.push(`"${key}": "${value}"`)
    } else {
      descriptions.push(`"${key}": ${value}`)
    }
  }
  // ["a", 1] -> '"a": 1'
  // ["b", "2"] -> '"b": "2"'
  // ["c", false] -> '"c": false'
  // ["d", null] -> '"d": null'
  return `The object has ${pairs.length} ${prop}: { ${descriptions.join(", ")} }`
}

module.exports = {
  createShallowCopy,
  createDeepCopy,
  listProperties,
  describeProps,
  doubleProps,
  listPropertyValues,
  describePropValues,
  sumDoubledValues,
  tripleProps,
  sumTripleProps,
  describeObjectPropsAndValues,
  describeObject,
}
