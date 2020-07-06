const {
  shoutWithExclamationPoints
} = require('./strings')

describe('communicating', () => {
  it('shouts with exclamation points', () => {
    expect(shoutWithExclamationPoints('osh was here', 3)).toEqual('osh was here!!!')
  })

  it('shouts with upper case', () => {
    expect(shoutWithUpperCase('osh was here')).toEqual('OSH WAS HERE')
  })

  it('shouts to someone with exclamation points', () => {
    expect(shoutWithUpperCaseToSomeoneWithExclamationPoints('osh was here', 5, 'Nela')).toEqual('Hey Nela, osh was here!!!!!')
  })

  // shouts to someone with upper case

  // whispers with lower case
  // whispers to someone with lower case

  /* writes a formal letter with the folowing template
Dear <person>

<message>

Kind regards,
<author>
  */
})
