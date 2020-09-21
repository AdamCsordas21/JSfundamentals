import {
  getWeekDay,
  dayNumberToName,
  dayNumberToNameInHungarian,
  getPartyIndicator,
  DayNumber,
  NumberTranslator,
  PartyIndicator
} from './datetime'

describe('date', () => {

  it('tells day of the week', () => {
    const testCases: [DayNumber, string][] = [
      [0, 'Sunday'],
      [1, 'Monday'],
      [2, 'Tuesday'],
      [3, 'Wednesday'],
      [4, 'Thursday'],
      [5, 'Friday'],
      [6, 'Saturday'],
    ]
    for (const [dayNumber, day] of testCases) {
      expect(dayNumberToName(dayNumber)).toEqual(day)
    }
  })

  it('tells day of the week in Hungarian', () => {
    const testCases: [DayNumber, string][] = [
      [0, 'vasárnap'],
      [1, 'hétfő'],
      [2, 'kedd'],
      [3, 'szerda'],
      [4, 'csütörtök'],
      [5, 'péntek'],
      [6, 'szombat'],
    ]
    for (const [dayNumber, day] of testCases) {
      expect(dayNumberToNameInHungarian(dayNumber)).toEqual(day)
    }
  })

  it('translates weekday number', () => {
    const number: number = 123
    const fakeTranslator: NumberTranslator = () => 'abc'
    const expected: string = 'abc'
    expect(getWeekDay(number, fakeTranslator)).toEqual(expected)
  })

  it('parties on Friday', () => {
    const testCases: [string, PartyIndicator][] = [
      ['Friday', '🎉'],
      ['any other day', '😞'],
    ]
    for (const [day, expected] of testCases) {
      expect(getPartyIndicator(day)).toEqual(expected)
    }
  })
})