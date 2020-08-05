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
  sumTripleProps,
  describeObjectPropsAndValues,
  describeObject,
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

  it('doubles each property value', () => {
    const obj = { a: 1, b: 2, c: 3 }

    const expected = { a: 2, b: 4, c: 6 }
    const actual = doubleProps(obj)

    expect(actual).toEqual(expected)
    expect(obj).toEqual({ a: 1, b: 2, c: 3 })
  })

  it('triples each property value', () => {
    const input = { a: 1, b: 2, c: 3 }
    expect(tripleProps(input)).toEqual({ a: 3, b: 6, c: 9 })
    expect(input).toEqual({ a: 1, b: 2, c: 3 })
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

  const testCases = [
    [{ a: 1, b: 2, c: 3, d: 4 }, 'The object props are "a", "b", "c" and "d" and the values are "1", "2", "3" and "4"'],
    [{ a: 1, b: 2 }, 'The object props are "a" and "b" and the values are "1" and "2"'],
    [{ a: 1 }, 'The object props are "a" and the values are "1"'],
  ]
  for (const [input, expected] of testCases) {
    it('describes all props and all values: ' + expected, () => {
      expect(describeObjectPropsAndValues(input)).toEqual(expected)
    })
  }

  it('describes all props and values as pairs', () => {
    const testCases = [
      [{ a: 1, b: '2', c: false, d: null }, 'The object has 4 properties: { "a": 1, "b": "2", "c": false, "d": null }'],
      [{ a: 1 }, 'The object has 1 property: { "a": 1 }'],
    ]
    for (const [input, expected] of testCases) {
      expect(describeObject(input)).toEqual(expected)
    }
  })
})
