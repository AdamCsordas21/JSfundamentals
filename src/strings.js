function shoutWithExclamationPoints(string, count) {
  return string + '!'.repeat(count)
}

function shoutWithUpperCase(string) {
  return string.toUpperCase()
}

function shoutToSomeoneWithExclamationPoints(string, count, name) {
  return `Hey ${name}, ${string}${'!'.repeat(count)}`
}

function shoutToSomeoneWithUpperCase(string, name) {
  return `HEY ${name.toUpperCase()}, ${string.toUpperCase()}`
}

function whisperWithLowerCase(string) {
  return string.toLowerCase()
}

function whisperToSomeoneWithLowerCase(string, name) {
  return `hey ${name.toLowerCase()}, ${string.toLowerCase()}`
}

function writeFormalLetter(person, author, message) {
  return `Dear ${person},

${message}

Kind regards,
${author}`
}

function describeIntegerDivisionRemainder(divident, divisor) {
  return `The remainder of ${divident} divided by ${divisor} is ${divident % divisor}.`
}
/*
27 / 23 is 1 and reminder of 4
27 - dividend
23 - divisor
1 - quotient
4 - reminder
*/

function getFirstAndLastLetterOfString(str) {
  return `'osh was here' has '${str.charAt(0)}' as the first letter and '${str.charAt(str.length - 1)}' as the last one.`
}

function getSentenceType(string) {
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
function isStringImportant(string) {
  return string.includes('osh')
}

function checkForAmazingString(string) {
  return `the '${string}' sentence ${isStringImportant(string) ? 'is' : 'is not'} amazing`
}

function getIndexOfFirstOccurrence(string, searchString) {
  return `First occurrence of '${searchString}' is at index ${string.indexOf(searchString)}.`
}

function getIndexOfSecondOccurrence(string, searchString) {
  return `Second occurrence of '${searchString}' is at index ${string.indexOf(searchString, string.indexOf(searchString) + 1)}.`
}

function appendWithUnderscores(string, number) {
  return `${string.padEnd(30, '_')}${number}`
}

function prependWithZeros(string) {
  return string.padStart(5, '0')
}

function replaceAll(string, search, replacement) {
  return string.replace(new RegExp(search, 'g'), replacement)
}

function convertEveryOccurrenceForGivenString(string) {
  return replaceAll(string, 'osh', 'OSH')
}

function convertFirstOccurenceForGivenString(string) {
  return string.replace('osh', 'OSH')
}

function convertEveryOtherOccurrenceForGivenString(string) {
  let replace = false
  return replaceAll(string, 'osh', () => {
    replace = !replace
    return replace ? 'OSH' : 'osh'
  })
}

function splitStringFrom5thChar(string) {
  return string.slice(4)
}

function splitStringFrom5thCharToTheEndBut3AtMost(string) {
  return string.slice(4, 7)
}

function splitStringFrom4thCharFromTheEndToTheEnd(string) {
  return string.slice(-4)
}

function splitStringFrom8thCharFromTheEndToThe6thChar(string) {
  return string.slice(-8, -5)
}

function splitStringIntoArrayConsisting(string) {
  return string.split('')
}

function checkStringStartAndEnd(string) {
  return string.startsWith('osh') && string.endsWith('osh')
}

function trimCharLeft(string, char) {
  while (string.charAt(0) === char) {
    string = string.substring(1)
  }
  return string
}

function trimCharRight(string, char) {
  while (string.charAt(string.length - 1) === char) {
    string = string.substring(0, string.length - 1)
  }
  return string
}

function trimChar(string, char) {
  return trimCharLeft(trimCharRight(string, char), char)
}

function removesExclamationPointsFromBeginningAndEndButNotMiddle(string) {
  return trimChar(string, '!')
}

function removeAllHyphensFromTheBeginningOfString(string) {
  return trimCharLeft(string, '-')
}

function removeAllZsFromTheEndOfString(string) {
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
  splitStringFrom8thCharFromTheEndToThe6thChara: splitStringFrom8thCharFromTheEndToThe6thChar,
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