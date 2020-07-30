function strToNumber(input) {
  return isNaN(input) ? 0 : Number(input)
}

function strToInteger(input, base) {
  return parseInt(input, base)
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