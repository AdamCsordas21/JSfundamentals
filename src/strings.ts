export function shoutWithExclamationPoints(string: string, count: number): string {
  return string + '!'.repeat(count)
}

export function shoutWithUpperCase(string: string): string {
  return string.toUpperCase()
}

export function shoutToSomeoneWithExclamationPoints(string: string, count: number, name: string): string {
  return `Hey ${name}, ${string}${'!'.repeat(count)}`
}

export function shoutToSomeoneWithUpperCase(string: string, name: string): string {
  return `HEY ${name.toUpperCase()}, ${string.toUpperCase()}`
}

export function whisperWithLowerCase(string: string): string {
  return string.toLowerCase()
}

export function whisperToSomeoneWithLowerCase(string: string, name: string): string {
  return `hey ${name.toLowerCase()}, ${string.toLowerCase()}`
}

export function writeFormalLetter(person: string, author: string, message: string): string {
  return `Dear ${person},

${message}

Kind regards,
${author}`
}

export function describeIntegerDivisionRemainder(divident: number, divisor: number): string {
  return `The remainder of ${divident} divided by ${divisor} is ${divident % divisor}.`
}
/*
27 / 23 is 1 and reminder of 4
27 - dividend
23 - divisor
1 - quotient
4 - reminder
*/

export function getFirstAndLastLetterOfString(str: string): string {
  return `'osh was here' has '${str.charAt(0)}' as the first letter and '${str.charAt(str.length - 1)}' as the last one.`
}

export function getSentenceType(string: string): string {
  if (string.endsWith('?')) return 'It was a question.'
  if (string.endsWith('!')) return 'It was an exclamation.'
  if (string.endsWith('.')) return 'It was a statement.'
  return "Unable to determine what's the type of this sentence."

  /* alternative solution
  return string.endsWith('?')
    ? 'It was a question'
    : string.endsWith('!')
    ? 'It was an exclamation.'
    : string.endsWith('.')
    ? 'It was a statement.'
    : "Unable to determine what's the type of this sentence."
  */
  /* alternative solution
  switch (string.charAt(string.length - 1)) {
    case '?': return 'It was a question.'
    case '!': return 'It was an exclamation.'
    case '.': return 'It was a statement.'
    default: return "Unable to determine what's the type of this sentence."
  }
  */
}

// s1 ? s2 : s3
export function isStringImportant(string: string): boolean {
  return string.includes('osh')
}

export function checkForAmazingString(string: string): string {
  return `the '${string}' sentence ${isStringImportant(string) ? 'is' : 'is not'} amazing`
}

export function getIndexOfFirstOccurrence(string: string, searchString: string): string {
  return `First occurrence of '${searchString}' is at index ${string.indexOf(searchString)}.`
}

export function getIndexOfSecondOccurrence(string: string, searchString: string): string {
  return `Second occurrence of '${searchString}' is at index ${string.indexOf(searchString, string.indexOf(searchString) + 1)}.`
}

export function appendWithUnderscores(string: string, number: number): string {
  return `${string.padEnd(30, '_')}${number}`
}

export function prependWithZeros(string: string): string {
  return string.padStart(5, '0')
}

export function replaceAll(string: string, search: any, replacement: any): string {
  return string.replace(new RegExp(search, 'g'), replacement)
}

export function convertEveryOccurrenceForGivenString(string: string): string {
  return replaceAll(string, 'osh', 'OSH')
}

export function convertFirstOccurenceForGivenString(string: string): string {
  return string.replace('osh', 'OSH')
}

export function convertEveryOtherOccurrenceForGivenString(string: string): string {
  let replace: boolean = false
  return replaceAll(string, 'osh', () => {
    replace = !replace
    return replace ? 'OSH' : 'osh'
  })
}

export function splitStringFrom5thChar(string: string): string {
  return string.slice(4)
}

export function splitStringFrom5thCharToTheEndBut3AtMost(string: string): string {
  return string.slice(4, 7)
}

export function splitStringFrom4thCharFromTheEndToTheEnd(string: string): string {
  return string.slice(-4)
}

export function splitStringFrom8thCharFromTheEndToThe6thChar(string: string): string {
  return string.slice(-8, -5)
}

export function splitStringIntoArrayConsisting(string: string): string[] {
  return string.split('')
}

export function checkStringStartAndEnd(string: string): boolean {
  return string.startsWith('osh') && string.endsWith('osh')
}

export function trimCharLeft(string: string, char: string): string {
  while (string.charAt(0) === char) {
    string = string.substring(1)
  }
  return string
}

export function trimCharRight(string: string, char: string): string {
  while (string.charAt(string.length - 1) === char) {
    string = string.substring(0, string.length - 1)
  }
  return string
}

export function trimChar(string: string, char: string): string {
  return trimCharLeft(trimCharRight(string, char), char)
}

export function removesExclamationPointsFromBeginningAndEndButNotMiddle(string: string): string {
  return trimChar(string, '!')
}

export function removeAllHyphensFromTheBeginningOfString(string: string): string {
  return trimCharLeft(string, '-')
}

export function removeAllZsFromTheEndOfString(string: string): string {
  return trimCharRight(string, 'z')
}

module.exports = {
  shoutWithExclamationPoints,
  shoutWithUpperCase,
  shoutToSomeoneWithExclamationPoints,
  shoutToSomeoneWithUpperCase,
  whisperWithLowerCase,
  whisperToSomeoneWithLowerCase,
  writeFormalLetter,
  getFirstAndLastLetterOfString,
  checkForAmazingString,
  isStringImportant,
  getIndexOfFirstOccurrence,
  getIndexOfSecondOccurrence,
  appendWithUnderscores,
  prependWithZeros,
  convertEveryOccurrenceForGivenString,
  convertEveryOtherOccurrenceForGivenString,
  convertFirstOccurenceForGivenString,
  splitStringFrom5thChar,
  splitStringFrom5thCharToTheEndBut3AtMost,
  splitStringFrom4thCharFromTheEndToTheEnd,
  splitStringFrom8thCharFromTheEndToThe6thChar,
  checkStringStartAndEnd,
  splitStringIntoArrayConsisting,
  removesExclamationPointsFromBeginningAndEndButNotMiddle,
  removeAllHyphensFromTheBeginningOfString,
  removeAllZsFromTheEndOfString,
  describeIntegerDivisionRemainder,
  getSentenceType,
  trimCharLeft,
  trimCharRight,
  trimChar,
}