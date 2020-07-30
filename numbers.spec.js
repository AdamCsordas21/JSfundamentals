const {
  strToNumber,
  strToInteger,
  // numberToString
} = require('./numbers')

describe('numbers', () => {
  it(`converts a string to a number
    if input is not a valid number, returns 0 instead
    (regular JS precision applies)`, () => {
    const testCases = [
      ['0', 0],
      ['1', 1],
      ['-123', -123],
      ['99.99', 99.99],
      ['osh was here', 0],
    ]

    for (const [input, expected] of testCases) {
      expect(strToNumber(input)).toBe(expected)
    }
  })

  it('converts number from different format to decimal integer', () => {
    const testCases = [
      { input: '123', base: 10, expected: 123 },
      { input: '01111011', base: 2, expected: 123 },
      { input: '0173', base: 8, expected: 123 },
      { input: '0x7b', base: 16, expected: 123 },
    ]

    for (const { input, base, expected } of testCases) {
      expect(strToInteger(input, base)).toBe(expected)
    }
  })

  // it(`converts number to desired base number as string
  // the base can be decimal, hexadecimal, octal or binary; defaults to decimal,
  // the number will be positive integer < 256
  // prefix binary numbers with 0 up to a length of 8 digits
  // prefix octal values with 0
  // prefix hexadecimal values with 0x`, () => {
  //   const testCases = [
  //     { input: 123, base: 10, expected: '123' },
  //     // { input: 123, base: 2, expected: '01111011' },
  //     // { input: 123, base: 8, expected: '0173' },
  //     // { input: 123, base: 16, expected: '0x7b' },
  //     // { input: 255, base: 16, expected: '0xff' },
  //   ]

  //   for (const { input, base, expected } of testCases) {
  //     expect(numberToString(input, base)).toBe(expected)
  //   }
  // })

  // it(`converts number to desired base number as string
  // the base can be decimal, hexadecimal, octal or binary; defaults to decimal,
  // the number will be positive integer < 256
  // prefix binary numbers with 0 up to a length of 8 digits
  // prefix octal values with 0
  // prefix hexadecimal values with 0x`, () => {
  //   const testCases = [
  //     { input: 123, base: 10, expected: '123' },
  //     { input: 123, base: 2, expected: '01111011' },
  //     { input: 123, base: 8, expected: '0173' },
  //     { input: 123, base: 16, expected: '0x7b' },
  //   ]

  //   for (const { input, base, expected } of testCases) {
  //     expect(numberToStringWithSwitch(input, base)).toBe(expected)
  //   }
  // })

  // it('converts number to currency', () => {
  //   const testCases = [
  //     { number: 1000, currency: 'GBP', expected: '£1,000.00' },
  //     { number: 9999.99, currency: 'USD', expected: '$9,999.99' },
  //     { number: 9999.99, currency: 'EUR', expected: '€9,999.99' },
  //     { number: 9999.99, currency: 'JPY', expected: '¥10,000' },
  //     { number: 9999.99, currency: 'HUF', expected: 'HUF 9,999.99' },
  //     { number: 9999.99, currency: 'OSH', expected: 'OSH 9,999.99' },
  //   ]

  //   for (const { number, currency, expected } of testCases) {
  //     expect(numberToCurrency(number, currency)).toBe(expected)
  //   }
  // })

  // it('converts number to short compact form, e.g. thousands (K), millions (M), etc... (in British English)', () => {
  //   const testCases = [
  //     [1, '1'],
  //     [12, '12'],
  //     [123, '123'],
  //     [1234, '1.2K'],
  //     [12345, '12K'],
  //     [123456, '123K'],
  //     [1234567, '1.2M'],
  //     [12345678, '12M'],
  //     [123456789, '123M'],
  //     [1234567890, '1.2B'],
  //   ]

  //   for (const [number, expected] of testCases) {
  //     expect(numberToShortCompactForm(number)).toBe(expected)
  //   }
  // })

  // it('converts number to long compact form, e.g. thousands, millions, etc... (in British English)', () => {
  //   const testCases = [
  //     [1, '1'],
  //     [12, '12'],
  //     [123, '123'],
  //     [1234, '1.2 thousand'],
  //     [12345, '12 thousand'],
  //     [123456, '123 thousand'],
  //     [1234567, '1.2 million'],
  //     [12345678, '12 million'],
  //     [123456789, '123 million'],
  //     [1234567890, '1.2 billion'],
  //   ]

  //   for (const [number, expected] of testCases) {
  //     expect(numberToLongCompactForm(number)).toBe(expected)
  //   }
  // })

  // it('converts numbers to format that Nela understands (accounting; GBP)', () => {
  //   const testCases = [
  //     [1, '£1.00'],
  //     [12, '£12.00'],
  //     [123, '£123.00'],
  //     [1234, '£1,234.00'],
  //     [-1, '(£1.00)'],
  //     [-12, '(£12.00)'],
  //     [-123, '(£123.00)'],
  //     [-1234, '(£1,234.00)'],
  //   ]

  //   for (const [number, expected] of testCases) {
  //     expect(numberToAccounting(number)).toBe(expected)
  //   }
  // })

  // it(`converts CSS colour written in hexadecimal form
  // eg. "#ffffff" -> "rgb(255, 25\z, 255)"
  // accepts short form as well, e.g. #fff`, () => {
  //   //todo
  // })
})
