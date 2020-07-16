describe('arrays simple functions', () => {
  it('adds an element to the beginning of an array and returns the resulting array', () => {
    expect(prependElement(['osh', 'was', 'here'], 'great')).toEqual(['great', 'osh', 'was', 'here'])
  })

  it('adds 2 elements to the beginning of an array and returns the resulting array', () => {
    expect(prepend2Elements(['osh', 'was', 'here'], 'the', 'great')).toEqual(['the', 'great', 'osh', 'was', 'here'])
  })

  it('adds an element to the end of an array and returns the resulting array', () => {
    expect(appendElement(['osh', 'was', 'here'], '!')).toEqual(['osh', 'was', 'here', '!'])
  })

  it('adds 2 elements to the end of an array and returns the resulting array', () => {
    expect(append2Elements(['osh', 'was', 'here'], '!', '!')).toEqual(['osh', 'was', 'here', '!', '!'])
  })

  it('joins 2 arrays together and returns the resulting array', () => {
    expect(joinArrays(['the', 'great'], ['osh', 'was', 'here'])).toEqual(['the', 'great', 'osh', 'was', 'here'])
  })

  it('removes an element from the beginning of an array and returns the item as a one item array', () => {
    expect(dequeueArray(['the', 'great', 'osh', 'was', 'here'])).toEqual(['the'])
  })

  it('removes 2 elements from the beginning of an array and returns the item as a two item array', () => {
    expect(dequeue2FromArray(['the', 'great', 'osh', 'was', 'here'])).toEqual(['the', 'great'])
  })

  it('removes an element from the end of an array and returns the item as a one item array', () => {
    expect(truncateArray(['the', 'great', 'osh', 'was', 'here'])).toEqual(['here'])
  })

  it('removes 2 elements from the end of an array and returns the item as a two item array', () => {
    expect(truncate2FromArray(['the', 'great', 'osh', 'was', 'here'])).toEqual(['was', 'here'])
  })

  it('checks if an array consists of all elements bigger than a given number ', () => {
    expect(areAllElementsBig([11, 12, 13], 10)).toEqual(true)
    expect(areAllElementsBig([11, 12, 13], 11)).toEqual(false)
  })

  it('checks if an array contains at least one element bigger than a given number ', () => {
    expect(hasBigElement([11, 12, 13], 12)).toEqual(true)
    expect(hasBigElement([11, 12, 13], 13)).toEqual(false)
  })

  it('replaces all elements with "osh" in a given array', () => {
    expect(oshifyArray(['some', 'boring', 'words', 'are', 'here'])).toEqual(['osh', 'osh', 'osh', 'osh', 'osh'])
  })

  it('replaces some elements (starting from a given index) with "osh" in a given array', () => {
    expect(oshifyArrayFromIndex(['some', 'boring', 'words', 'are', 'here'], 1)).toEqual(['some', 'osh', 'osh', 'osh', 'osh'])
  })

  it('replaces some elements (starting from and ending with a given index) with "osh" in a given array', () => {
    expect(oshifyArrayInRange(['some', 'boring', 'words', 'are', 'here'], 1, 3)).toEqual(['some', 'osh', 'osh', 'are', 'here'])
  })

  it('shortlists amazing elements of a given array (yeah, you know that element is considered amazing when it equals "osh"; array will consist of strings only)', () => {
    expect(shortlistAmazingElements(['osh', 'adam', 'nela', 'osh', 'nati', 'adam', 'osh', 'nela', 'nela'])).toEqual(['osh', 'osh', 'osh'])
  })

  it('shortlists amazing elements of a given array, but only if the given element is on an even position (array will consist of strings only)', () => {
    expect(shortlistAmazingElementsWhoAreNotOdd(['osh', 'adam', 'nela', 'osh', 'nati', 'adam', 'osh', 'nela', 'nela'])).toEqual(['osh', 'osh'])
  })


  it('shortlists amazing elements of a given array, but only if they are followed by great elements (a great element is "adam"; array will consist of strings only)', () => {
    expect(shortlistAmazingElementsOnlyWhenTheyAre(['osh', 'adam', 'nela', 'osh', 'nati', 'adam', 'osh', 'nela', 'nela'])).toEqual(['osh'])
  })

  it('trims whitespace from every element of a given array (array will consists of strings only)', () => {
    expect(trimArray(['osh  ', '  osh', '  osh  '])).toEqual(['osh', 'osh', 'osh'])
  })

  it('surrounds every other element of a given array with dashes (array will consists of strings only)', () => {
    expect(dashArray(['osh', 'was', 'here'])).toEqual(['-osh-', 'was', '-here-'])
  })

  it(`for every amazing element of a given array
  appends " !" to the previous element and
  prepends "! " to the next element
  (array will consists of strings only, element with "osh" will never be the first one nor the last one)`, () => {
    expect(shoutAroundOsh(['the', 'great', 'osh', 'was', 'here'])).toEqual(['the', 'great !', 'osh', '! was', 'here'])
  })
})

