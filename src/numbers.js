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


function numberToString(input, base) {
  const converted = input.toString(base)
  // if (base === 2) {
  //   return converted.padStart(8, 0)
  // }
  // if (base === 8) {
  //   return `0${converted}`
  // }
  // if (base === 16) {
  //   return `0x${converted}`
  // }
  // return converted
  switch (base) {
    case 2: return converted.padStart(8, 0)
    case 8: return `0${converted}`
    case 16: return `0x${converted}`
    default: return converted
  }
}

function numberToCurrency(number, currency) {
  return number.toLocaleString('en-US', {
    style: 'currency',
    currency,
  });
}

function numberToShortCompactForm(number) {
  return number.toLocaleString('en-GB', { notation: "compact" });
}

function numberToLongCompactForm(number) {
  return number.toLocaleString('en-GB', {
    notation: "compact",
    compactDisplay: "long"
  })
}

function numberToAccounting(number) {
  return number.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP',
    currencySign: 'accounting'
  })
}

function hexCodeToDecimalCode(h) {
  //    0 12 34 56
  //    # 01 02 03
  //     /   |   \
  //    /    |    \
  //   /     |     \
  // red   green   blue
  // const red = "0x"+input.slice(1, 3)
  // const green = "0x"+input.slice(3, 5)
  // const blue = "0x"+input.slice(5, 7)
  // return `rgb(${+red}, ${+green}, ${+blue})`

  if (h.length === 4) {
    h = '#' + h[1] + h[1] + h[2] + h[2] + h[3] + h[3]
  }
  const red = parseInt(h.slice(1, 3), 16)
  const green = parseInt(h.slice(3, 5), 16)
  const blue = parseInt(h.slice(5), 16)
  return `rgb(${red}, ${green}, ${blue})`
}

module.exports = {
  strToNumber,
  strToInteger,
  numberToString,
  numberToCurrency,
  numberToShortCompactForm,
  numberToLongCompactForm,
  numberToAccounting,
  hexCodeToDecimalCode
}