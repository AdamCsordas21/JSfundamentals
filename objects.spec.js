const {
  createShallowCopy,
  createDeepCopy,
  listProperties,
  describeProps,
  doubleProps,
  listPropertyValues,
  describePropValues,
  sumDoubledValues,
  tripleProps,
  sumTripleProps
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

  it('describes the properties of an object', () => {
    expect(describeProps({ a: 1, b: 2, c: 3 })).toEqual('This object has 3 props: a, b, c')
  })

  it('doubles each property value', () => {
    expect(doubleProps({ a: 1, b: 2, c: 3 })).toEqual({ a: 2, b: 4, c: 6 })
  })

  it('triples each property value', () => {
    expect(tripleProps({ a: 1, b: 2, c: 3 })).toEqual({ a: 3, b: 6, c: 9 })
  })

  it('provides list of values of any object', () => {
    expect(listPropertyValues({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3])
  })

  it('describes the property values of an object', () => {
    expect(describePropValues({ a: 4, b: 6, c: 0 })).toEqual('This object has 3 props, with values: 4, 6 and 0')
  })

  it('doubles each property value and sums it', () => {
    expect(sumDoubledValues({ a: 1, b: 2 })).toEqual(6)
    expect(sumDoubledValues({ a: 1, b: 2, c: 3 })).toEqual(12)
  })

  it('triples each property value and sums it', () => {
    expect(sumTripleProps({ a: 1, b: 2, c: 3 })).toEqual(18)
  })
})