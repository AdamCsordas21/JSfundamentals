import {
  ratePlayersSkills,
  isScoreHigh,
  filterOutLowLevelPlayers,
  sortPlayersDescending,
  sortPlayersAscending,
  top3Players,
  createMonthlyRankingOfPlayers,
  createMonthlyMessageOfPlayerThatWillDropOut,
  createAlphabeticallyOrderedPlayerDetailsList,
  playerToString,
  stringToListElement,
  listElementsToOrderedList
} from './fifa'

describe('fifa rating', () => {
  it("rates players' skills", () => {
    // if player has more than 1400 points, it's high skill level (AVOID!)
    // if player has lower or equal to 1400 points, it's a low skill level (PLAY!)
    /*
    player: number
    player: {
      name: string
      score: number
    }
    */
    const players: { name: string, score: number }[] = [
      { name: 'p1', score: 1455 },
      { name: 'p2', score: 1235 },
      { name: 'p3', score: 1085 },
      { name: 'p4', score: 2210 },
      { name: 'p5', score: 1565 },
    ];
    const actual: any = ratePlayersSkills(players);
    const expected: string[] = [
      'High skill level - Avoid p1!',
      'Low skill level - Play with p2!',
      'Low skill level - Play with p3!',
      'High skill level - Avoid p4!',
      'High skill level - Avoid p5!',
    ];

    expect(actual).toEqual(expected);
  })

  it('rates player score as high when above 1400', () => {
    const player = {
      name: 'osh',
      score: 2000
    }
    const actual = isScoreHigh(player)
    const expected = true

    expect(actual).toEqual(expected)
  })

  it('rates player score as low when below or equal to 100', () => {
    const player = { name: 'adam', score: 1000 }
    const actual = isScoreHigh(player)
    const expected = false

    expect(actual).toEqual(expected)
  })

  const players = [
    { name: 'p1', score: { current: 1455, averageInLastWeek: 1300 } },
    { name: 'p2', score: { current: 1235, averageInLastWeek: 1400 } },
    { name: 'p3', score: { current: 1085, averageInLastWeek: 1100 } },
    { name: 'p4', score: { current: 2210, averageInLastWeek: 2100 } },
    { name: 'p5', score: { current: 1565, averageInLastWeek: 1300 } },
    { name: 'p6', score: { current: 3000, averageInLastWeek: 3100 } },
  ];

  it('produces monthly ranking of players', () => {
    const actual = createMonthlyRankingOfPlayers(players)
    const expected = 'This month p6 was number one. Second place belongs to p4 and last but not least p5.'

    expect(actual).toEqual(expected)
  })

  it('lists top 3 players with their scores ordering highest to lowest', () => {
    const actual = top3Players(players)
    const expected = [
      { name: 'p6', score: { current: 3000, averageInLastWeek: 3100 } },
      { name: 'p4', score: { current: 2210, averageInLastWeek: 2100 } },
      { name: 'p5', score: { current: 1565, averageInLastWeek: 1300 } },
    ];

    expect(actual).toEqual(expected)
  })

  it('sorts players by their score descending', () => {
    const actual = sortPlayersDescending(players)
    const expected = [
      { name: 'p6', score: { current: 3000, averageInLastWeek: 3100 } },
      { name: 'p4', score: { current: 2210, averageInLastWeek: 2100 } },
      { name: 'p5', score: { current: 1565, averageInLastWeek: 1300 } },
      { name: 'p1', score: { current: 1455, averageInLastWeek: 1300 }},
      { name: 'p2', score: { current: 1235, averageInLastWeek: 1400 } },
      { name: 'p3', score: { current: 1085, averageInLastWeek: 1100 } },
    ];


    expect(actual).toEqual(expected)
  })

  it('sorts players by their score ascending', () => {
    const actual = sortPlayersAscending(players)
    const expected = [
      { name: 'p3', score: { current: 1085, averageInLastWeek: 1100 } },
      { name: 'p2', score: { current: 1235, averageInLastWeek: 1400 } },
      { name: 'p1', score: { current: 1455, averageInLastWeek: 1300 } },
      { name: 'p5', score: { current: 1565, averageInLastWeek: 1300 } },
      { name: 'p4', score: { current: 2210, averageInLastWeek: 2100 } },
      { name: 'p6', score: { current: 3000, averageInLastWeek: 3100 } },
    ];

    expect(actual).toEqual(expected)
  })

  it('produces monthly message of the player that will drop out', () => {
    // player to drop out is the player from the current rooster that has the lowest current points
    const players = [
      { player: { first: 'Osh', last: 'Sama' }, score: { top: 500, current: 123 }},
      { player: { first: 'Adam', last: 'Csordas' }, score: { top: 999, current: 501 }},
      { player: { first: 'Nati', last: 'Fati' }, score: { top: 1000000, current: -12 }},
      { player: { first: 'Nela', last: 'Trela' }, score: { top: 10, current: 10 }},
    ]
    const actual = createMonthlyMessageOfPlayerThatWillDropOut(players)
    const expected = 'This month Nati Fati will drop out. With score of -12 was the last one in the league.'

    expect(actual).toEqual(expected)
  })

  // Produce a list of player details and sort them alphabetically
  // Use basic HTML <ol> ordered list
  // For each player display information in the following format <title if present>. <first name> <middle name if any> <last name>: <high score>
  it('it produces an ordered list of player details and sort them alphabetically', () => {
    const players = [
      { firstName: 'Osh', lastName: 'Sama', highScore: 5000 },
      { title: 'Ms.', firstName: 'Nati', midName: 'Werewolf', lastName: 'Fati', highScore: 4000 },
      { title: 'Mrs.', firstName: 'Nela', lastName: 'Trela', highScore: 6000 },
      { title: 'Mr.', firstName: 'Adam', midName: 'Seer', lastName: 'Csordas', highScore: 4700 },
    ];
    const actual = createAlphabeticallyOrderedPlayerDetailsList(players);
    const expected = `<ol>
<li>Mr. Adam Seer Csordas: 4700</li>
<li>Ms. Nati Werewolf Fati: 4000</li>
<li>Mrs. Nela Trela: 6000</li>
<li>Osh Sama: 5000</li>
</ol>`

    expect(actual).toEqual(expected);
  })

  describe('player description', () => {
    it('converts player object to string representation', () => {
      const player = { title: 'Mr.', firstName: 'Adam', midName: 'Seer', lastName: 'Csordas', highScore: 4700 }
      const actual = playerToString(player)
      const expected = 'Mr. Adam Seer Csordas: 4700'
      expect(actual).toEqual(expected)
    })

    it('converts player object to string representation when title is undefined', () => {
      const player = { firstName: 'Adam', midName: 'Seer', lastName: 'Csordas', highScore: 4700 }
      const actual = playerToString(player)
      const expected = 'Adam Seer Csordas: 4700'
      expect(actual).toEqual(expected)
    })

    it('converts player object to string representation when middle name is undefined', () => {
      const player = { title: 'Mr.', firstName: 'Adam', lastName: 'Csordas', highScore: 4700 }
      const actual = playerToString(player)
      const expected = 'Mr. Adam Csordas: 4700'
      expect(actual).toEqual(expected)
    })

    it('converts player object to string representation when title and middle name are undefined', () => {
      const player = { firstName: 'Adam', lastName: 'Csordas', highScore: 4700 }
      const actual = playerToString(player)
      const expected = 'Adam Csordas: 4700'
      expect(actual).toEqual(expected)
    })
  })

  describe('list creator', () => {
    it('creates a single list element out of a string', () => {
      const someString = 'adam csordas 222222'
      const actual = stringToListElement(someString)
      const expected = '<li>adam csordas 222222</li>'
      expect(actual).toEqual(expected)
    })

    it('creates an ordered list out of a string representing list items', () => {
      const someString = '<li>adam csordas 222222</li>\n<li>osh was here</li>'
      const actual = listElementsToOrderedList(someString)
      const expected = '<ol>\n<li>adam csordas 222222</li>\n<li>osh was here</li>\n</ol>'
      expect(actual).toEqual(expected)
    })
  })
})



/*
const sandwiches = [{}, {}, {}, {}]

function addButter(sandwich) {
  return { ...sandwich, butter: true }
}

function addCheese(sandwich) {
  return { ...sandwich, cheese: true }
}

function addHam(sandwich) {
  return { ...sandwich, ham: true }
}

const sandwichesWithCheeseAndHam = sandwiches
  .map(addButter)
  .map(addCheese)
  .map(addHam)
*/