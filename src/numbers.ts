export function strToNumber(input: string): number {
  return isNaN(Number(input)) ? 0 : Number(input)
}

function getListOfValidDigits(base: number): string[] {
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

function filterBaseFormatting(input: string, base: number): string {
  if (base === 16) {
    const lowerCased: string = input.toLowerCase()
    return lowerCased.startsWith('0x') ? lowerCased.substring(2) : lowerCased
  }
  return input
}

function isValid(input: string, base: number): boolean {
  for (const char of input) {
    if (!getListOfValidDigits(base).includes(char)) {
      return false
    }
  }
  return true
}

export function strToInteger(input: string, base: number): number {
  const filtered: string = filterBaseFormatting(input, base)
  return isValid(filtered, base) ? parseInt(filtered, base) : 0
}


export function numberToString(input: number, base: number): string {
  const converted: string = input.toString(base)
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
    case 2: return converted.padStart(8, '0')
    case 8: return `0${converted}`
    case 16: return `0x${converted}`
    default: return converted
  }
}

export function numberToCurrency(number: number, currency: string): string {
  return number.toLocaleString('en-US', {
    style: 'currency',
    currency,
  });
}

export function numberToShortCompactForm(number: number): string {
  return number.toLocaleString('en-GB', {
    notation: "compact"
  });
}

export function numberToLongCompactForm(number: number): string {
  return BigInt(number).toLocaleString('en-GB', {
    notation: "compact",
    compactDisplay: "long"
  })
}

export function numberToAccounting(number: number): string {
  return number.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP',
    currencySign: 'accounting'
  } as Intl.NumberFormatOptions)
}

export function hexCodeToDecimalCode(h: string): string {
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
  const red: number = parseInt(h.slice(1, 3), 16)
  const green: number = parseInt(h.slice(3, 5), 16)
  const blue: number = parseInt(h.slice(5), 16)
  return `rgb(${red}, ${green}, ${blue})`
}
