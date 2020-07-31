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

module.exports = {
  createShallowCopy,
  createDeepCopy,
  listProperties,
  describeProps
}