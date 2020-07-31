function strToNumber(input) {
  return isNaN(input) ? 0 : Number(input)
}

function getListOfValidDigits(base) {
  if (base === 2) {
    return '01'.split('')
  }
  if (base === 8) {
    return '01234567'.split('')
  }
  if (base === 10) {
    return '0123456789'.split('')
  }
  return '0123456789abcdef'.split('')
}

function filterBaseFormatting(input, base) {
  if (base === 16) {
    const lowerCased = input.toLowerCase()
    return lowerCased.startsWith('0x') ? lowerCased.substring(2) : lowerCased
  }
  return input
}

function isValid(input, base) {
  for (const char of input) {
    if (!getListOfValidDigits(base).includes(char)) {
      return false
    }
  }
  return true
}

function strToInteger(input, base) {
  const filtered = filterBaseFormatting(input, base)
  return isValid(filtered, base) ? parseInt(filtered, base) : 0
}

/*
function numberToString(input, base) {
  return input.toString(base)
}

input === 0 <= 256
binary numbers = input.padStart(8, 0) input.toString(base).padStart(8, 0)
octal numbers = input.padStart(0)     `0${input.toString(base)}`
hexadecimel = input.padStart(0x)      `0x${input.toString(base)}`

return something ? something : something

*/

function numberToCurrency(number, currency) {
  return number.toLocaleString('en-US', {
    style: 'currency',
    currency: `${currency}`,
  });
}

module.exports = {
  strToNumber,
  strToInteger,
  // numberToString,
  numberToCurrency
}