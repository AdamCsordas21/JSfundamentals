const {
  createShallowCopy,
  createDeepCopy,
  listProperties,
  describeProps,
} = require('./objects')

describe('objects', () => {
  it('creates shallow copy of object with name and address', () => {
    const myObj = { name: 'osh', address: { street: 'long' } }
    const actual = createShallowCopy(myObj)
    expect(actual.name).toEqual('osh')
    expect(actual.address.street).toEqual('long')
    actual.name = 'copied'
    actual.address.street = 'short'
    expect(actual).not.toBe(myObj)
    expect(actual.name).toEqual('copied')
    expect(myObj.name).toEqual('osh')
    expect(actual.address.street).toEqual('short')
    expect(myObj.address.street).toEqual('short')
  })

  it('creates deep copy of object with name and address', () => {
    const myObj = { name: 'osh', address: { street: 'long' } }
    const actual = createDeepCopy(myObj)
    expect(actual.name).toEqual('osh')
    expect(actual.address.street).toEqual('long')
    actual.name = 'copied'
    actual.address.street = 'short'
    expect(actual).not.toBe(myObj)
    expect(actual.name).toEqual('copied')
    expect(myObj.name).toEqual('osh')
    expect(actual.address.street).toEqual('short')
    expect(myObj.address.street).toEqual('long')
  })

  it('provides list of own properties of any object', () => {
    expect(listProperties({ a: 1, b: 2 })).toEqual(['a', 'b'])
  })

  it('describes the properites of an object', () => {
    expect(describeProps({ a: 1, b: 2, c: 3})).toEqual('This object has 3 props: a, b, c')
  })
})