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
  
  // tells what's the reminder of the integer division for any 2 given numbers, e.g.
  // for input of 27 and 23 it outputs "The reminder of 27 divided by 23 is 4."
  
  // tells what's the first and last letter for a given string (string length will always be at least 1)
  // for input of "osh was here" it outputs "'osh was here' has 'o' as the first letter and 'e' as the last one."
  
  // tells if a given string is a question, a shout or a sentence based if it ends with a '?', '!' or '.' respectively
  // otherwise it'll tell that it's not sure.
  
  // checks if a given string is important or not (by returning boolean);
  // a string is deemed important if it contains 'osh'
  
  // tells if a given string is amazing; a string is considered amazing if it contains 'osh'
  // for input of "osh was here" it outputs "the 'osh was here' sentence is amazing"

  // tells the start index of the first occurence of a search string in a given string
  // for input of "osh was here and then was there" string and "was" as a search string, it outputs "First occurence of 'was' is at index 4."

  // tells the start index of the second occurence of a search string in a given string
  // for input of "osh was here and then was there" string and "was" as a search string, it outputs "Second occurence of 'was' is at index 22."
  
  // appends a string with underscores for up to 30 characters long and adds page number that was also privided (all string lengths will be under 30)
  // for input of "chapter 1: osh was here" and 23, it outputs "chapter 1: osh was here_______23"
  
  // prepends a number with zeros for a maximum length of 5 (all numbers will be 5 digits or shorter)
  // for input of "23" it outputs "00023"
  
  // converts every occurence of 'osh' to 'OSH' for a given string
  // for input of "osh was here and osh was there" it outputs "OSH was here and OSH was there"
  
  // converts first occurence of 'osh' to 'OSH' for a given string
  // for input of "osh was here and osh was there" it outputs "OSH was here and osh was there"
  
  // converts every other occurence of 'osh' to 'OSH' for a given string
  // for input of "osh was here and osh was there, then osh was here again, but osh never went back there"
  // it outputs "OSH was here and osh was there, then OSH was here again, but osh never went back there"
  
  // splits a string from 5th character to the end (all strings will be 10 characters or longer)
  // for input of "osh was here" it returns "was here"
  
  // splits a string from 5th character to the end, but 3 at most (all strings will be 10 characters or longer)
  // for input of "osh was here" it returns "was"
  
  // splits a string from 4th character from the end, to the end (all strings will be 10 characters or longer)
  // for input of "osh was here" it returns "here"
  
  // splits a string from 8th character from the end, to the 6 character from the end inclusive (all strings will be 10 characters or longer)
  // for input of "osh was here" it returns "was"

  // splits a string into array consisting of single characters
  // for input of "osh was here" it returns ["o", "s", "h", " ", "w", "a", "s", " ", "h", "e", "r", "e"]
  
  // checks if string starts and ends with "osh"
  // for input of "osh was here and here was osh" it returns true
  
  // removes all exclamation points from the beginning or end of a string, but not from the middle
  // for input of "!!osh! was!here!!" it returns "osh! was!here"
  
  // removes all hyphens from the beginning of a string
  // for input of "--- osh - was - here--" it returns " osh - was - here--"
  
  // removes all z's from the end of a string
  // for input of "zzz osh z was z herezz" it returns "zzz osh z was z here"
})
