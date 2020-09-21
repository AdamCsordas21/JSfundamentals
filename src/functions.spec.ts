import {
  f1,
  f2,
  named,
  anonym,
  arrow,
  addSquares,
} from './functions'

describe('function declaration vs expression', () => {
  it('prints title and name', () => {
    expect(f2('king', 'osh')).toEqual('king osh')
  })

  it('demonstrates that the declaration order does not matter', () => {
    expect(f1('osh')).toEqual('king osh')
  })

  it('scope (no clue :p)', () => {
    expect(named()).toEqual('osh')
    expect(anonym()).toEqual('osh')
    expect(arrow()).toEqual('osh')
  })

  it('allows to call only outer functions', () => {
    expect(addSquares(2, 3)).toEqual(13)
  })

  /*
  it(`does not allow calling inner functions
  (we have no access to inner scope of functions from the outside)`, () => {
    // ReferenceError: square is not defined
    expect(square(2)).toEqual(4)
  })
  */
})