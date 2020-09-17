const {
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
  convertFirstOccurenceForGivenString,
  convertEveryOtherOccurrenceForGivenString,
  splitStringFrom5thChar,
  splitStringFrom5thCharToTheEndBut3AtMost,
  splitStringFrom4thCharFromTheEndToTheEnd,
  splitStringFrom8thCharFromTheEndToThe6thChara,
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
} = require('./strings')

describe('communicating', () => {
  it('shouts with exclamation points', () => {
    expect(shoutWithExclamationPoints('osh was here', 3)).toEqual('osh was here!!!')
  })

  it('shouts with upper case', () => {
    expect(shoutWithUpperCase('osh was here')).toEqual('OSH WAS HERE')
  })

  it('shouts to someone with exclamation points', () => {
    expect(shoutToSomeoneWithExclamationPoints('osh was here', 5, 'Nela')).toEqual('Hey Nela, osh was here!!!!!')
  })

  it('shouts to someone with upper case', () => {
    expect(shoutToSomeoneWithUpperCase('osh was here', 'Nela')).toEqual('HEY NELA, OSH WAS HERE')
  })

  it('whispers with lower case', () => {
    expect(whisperWithLowerCase('Osh was here')).toEqual('osh was here')
  })

  it('whispers to someone with lower case', () => {
    expect(whisperToSomeoneWithLowerCase('Osh was here', 'NELA')).toEqual('hey nela, osh was here')
  })

  /* writes a formal letter with the following template
Dear <person>,

<message>

Kind regards,
<author>
  */
  it('writes a formal letter with specific template', () => {
    const expected = `Dear Nela,

You're the werewolf. You've been found.

Kind regards,
The Villagers`
    expect(writeFormalLetter('Nela', 'The Villagers', "You're the werewolf. You've been found.")).toEqual(expected)
  })

  // tells what's the remainder of the integer division for any 2 given numbers, e.g.
  // for input of 27 and 23 it outputs "The remainder of 27 divided by 23 is 4."
  it("tells what's the remainder of the integer division for any 2 given numbers", () => {
    expect(describeIntegerDivisionRemainder(27, 23)).toEqual('The remainder of 27 divided by 23 is 4.')
  })

  // tells what's the first and last letter for a given string (string length will always be at least 1)
  // for input of "osh was here" it outputs "'osh was here' has 'o' as the first letter and 'e' as the last one."
  it('tells first and last letter for a given string', () => {
    expect(getFirstAndLastLetterOfString('osh was here')).toEqual("'osh was here' has 'o' as the first letter and 'e' as the last one.")
  })

  // tells if a given sentence is a question, an exclamation or a statement based if it ends with a '?', '!' or '.' respectively
  // otherwise it'll tell that it's not sure.
  describe('sentence types', () => {
    it('tells if a given sentence is a question', () => {
      expect(getSentenceType('Was Osh here?')).toEqual('It was a question.')
    })

    it('tells if a given sentence is an exclamation', () => {
      expect(getSentenceType('Osh was here!')).toEqual('It was an exclamation.')
    })

    it('tells if a given sentence is a statement', () => {
      expect(getSentenceType('Osh was here.')).toEqual('It was a statement.')
    })

    it('tells if a given sentence is a statement', () => {
      expect(getSentenceType('Osh was here')).toEqual("Unable to determine what's the type of this sentence.")
    })
  })

  // checks if a given string is important or not (by returning boolean);
  // a string is deemed important if it contains 'osh'
  describe('checks if a given string is important or not and returns boolean, string is important if it contains osh', () => {
    it('finds important strings', () => {
      expect(isStringImportant('osh was here')).toEqual(true)
    })
    it('finds not important strings', () => {
      expect(isStringImportant('adam was here')).toEqual(false)
    })
  })

  // tells if a given string is amazing; a string is considered amazing if it contains 'osh'
  // for input of "osh was here" it outputs "the 'osh was here' sentence is amazing"
  describe('tells if a given string is amazing', () => {
    it("tells it's amazing when it contains osh", () => {
      expect(checkForAmazingString('osh was here')).toEqual("the 'osh was here' sentence is amazing")
    })
    it("tells it's not amazing when it don't contain osh", () => {
      expect(checkForAmazingString('adam was here')).toEqual("the 'adam was here' sentence is not amazing")
    })
  })

  // tells the start index of the first occurence of a search string in a given string
  // for input of "osh was here and then was there" string and "was" as a search string, it outputs "First occurrence of 'was' is at index 4."
  it('tells the start index of the first occurrence of a string in a given string', () => {
    expect(getIndexOfFirstOccurrence('osh was here and then was there', 'was')).toEqual("First occurrence of 'was' is at index 4.")
  })

  // tells the start index of the second occurrence of a search string in a given string
  // for input of "osh was here and then was there" string and "was" as a search string, it outputs "Second occurrence of 'was' is at index 22."
  it('tells the start index of the second occurence of a string in a given string', () => {
    expect(getIndexOfSecondOccurrence('osh was here and then was there', 'was')).toEqual("Second occurrence of 'was' is at index 22.")
  })

  // appends a string with underscores for up to 30 characters long and adds page number that was also provided (all string lengths will be under 30)
  // for input of "chapter 1: osh was here" and 23, it outputs "chapter 1: osh was here_______23"
  it('appends a string with underscore for up to 30 characters long ands page number that was also provided', () => {
    expect(appendWithUnderscores('chapter 1: osh was here', 23)).toEqual('chapter 1: osh was here_______23')
  })

  // prepends a number with zeros for a maximum length of 5 (all numbers will be 5 digits or shorter)
  // for input of "23" it outputs "00023"
  it('prepends a number with zeros for a maximum length of 5', () => {
    expect(prependWithZeros('23')).toEqual('00023')
  })

  // converts every occurrence of 'osh' to 'OSH' for a given string
  // for input of "osh was here and osh was there" it outputs "OSH was here and OSH was there"
  it('converts every occurrence of "osh" to "OSH" for a given string', () => {
    expect(convertEveryOccurrenceForGivenString('osh was here and osh was there')).toEqual('OSH was here and OSH was there')
  })

  // converts first occurrence of 'osh' to 'OSH' for a given string
  // for input of "osh was here and osh was there" it outputs "OSH was here and osh was there"
  // https://flaviocopes.com/javascript-regular-expressions/#how-does-a-regular-expression-look-like
  it('converts first occurrence of "osh" to "OSH" for a given string', () => {
    expect(convertFirstOccurenceForGivenString('osh was here and osh was there')).toEqual('OSH was here and osh was there')
  })

  // converts every other occurrence of 'osh' to 'OSH' for a given string
  // for input of "osh was here and osh was there, then osh was here again, but osh never went back there"
  // it outputs "OSH was here and osh was there, then OSH was here again, but osh never went back there"
  it('converts every other occurrence of "osh" to "OSH" for a given string', () => {
    expect(convertEveryOtherOccurrenceForGivenString('osh was here and osh was there, then osh was there again, but osh never went back there'))
    .toEqual('OSH was here and osh was there, then OSH was there again, but osh never went back there')
  })

  // splits a string from 5th character to the end (all strings will be 10 characters or longer)
  // for input of "osh was here" it returns "was here"
  it('splits a string from 5th character to the end', () => {
    expect(splitStringFrom5thChar('osh was here')).toEqual('was here')
  })

  // splits a string from 5th character to the end, but 3 at most (all strings will be 10 characters or longer)
  // for input of "osh was here" it returns "was"
  it('splits a string from 5th character to the end, but 3 at most', () => {
    expect(splitStringFrom5thCharToTheEndBut3AtMost('osh was here')).toEqual('was')
  })

  // splits a string from 4th character from the end, to the end (all strings will be 10 characters or longer)
  // for input of "osh was here" it returns "here"
  it('splits a string from 4th character from the end, to the end', () => {
    expect(splitStringFrom4thCharFromTheEndToTheEnd('osh was here')).toEqual('here')
  })

  // splits a string from 8th character from the end, to the 6 character from the end inclusive (all strings will be 10 characters or longer)
  // for input of "osh was here" it returns "was"
  it('splits a string from 8th character from the end to the 6th characther from the end inclusive', () => {
    expect(splitStringFrom8thCharFromTheEndToThe6thChara('osh was here')).toEqual('was')
  })

  // splits a string into array consisting of single characters
  // for input of "osh was here" it returns ["o", "s", "h", " ", "w", "a", "s", " ", "h", "e", "r", "e"]
  it('splits a string into array consisting of single characters', () => {
    expect(splitStringIntoArrayConsisting("osh was here")).toEqual(["o", "s", "h", " ", "w", "a", "s", " ", "h", "e", "r", "e"])
  })

  // checks if string starts and ends with "osh"
  // for input of "osh was here and here was osh" it returns true
  describe('tells if a given string starts and end with "osh"', () => {
    it('finds "osh" at the beginning and at the end of a string', () => {
      expect(checkStringStartAndEnd('osh was here and here was osh')).toEqual(true)
    })

    it('Does not find "osh" at beginning and at the end of a string', () => {
      expect(checkStringStartAndEnd('adam was here and here was adam')).toEqual(false)
    })
  })

  describe('trimming', () => {
    it('trims repeated single character from the beginning', () => {
      expect(trimCharLeft('xxosh was herex', 'x')).toEqual('osh was herex')
    })

    it('trims repeated single character from the end', () => {
      expect(trimCharRight('xxxosh was xxx herexx', 'x')).toEqual('xxxosh was xxx here')
    })

    it('trims repeated single character from both the beginning and the end', () => {
      expect(trimChar('xxxosh was xxx herexx', 'x')).toEqual('osh was xxx here')
    })
  })

  // removes all exclamation points from the beginning or end of a string, but not from the middle
  // for input of "!!osh! was!here!!" it returns "osh! was!here"
  it('removes all exclamation points from the beginning or end of a string, but not from the middle', () => {
    expect(removesExclamationPointsFromBeginningAndEndButNotMiddle('!!osh! was!here!!')).toEqual('osh! was!here')
  })

  // removes all hyphens from the beginning of a string
  // for input of "--- osh - was - here--" it returns " osh - was - here--"
  it('removes all hyphens from the beginning of a string', () => {
    expect(removeAllHyphensFromTheBeginningOfString('--- osh - was - here--')).toEqual(' osh - was - here--')
  })

  // removes all z's from the end of a string
  // for input of "zzz osh z was z herezz" it returns "zzz osh z was z here"
  it("removes all z's from the end of a string", () => {
    expect(removeAllZsFromTheEndOfString('zzz osh z was z herezz')).toEqual('zzz osh z was z here')
  })

})
