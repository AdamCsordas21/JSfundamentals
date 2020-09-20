export function dayNumberToName(number) {
  switch (number) {
    case 0: return 'Sunday'
    case 1: return 'Monday'
    case 2: return 'Tuesday'
    case 3: return 'Wednesday'
    case 4: return 'Thursday'
    case 5: return 'Friday'
    case 6: return 'Saturday'
  }
}

export function dayNumberToNameInHungarian(number) {
  switch (number) {
    case 0: return 'vasárnap'
    case 1: return 'hétfő'
    case 2: return 'kedd'
    case 3: return 'szerda'
    case 4: return 'csütörtök'
    case 5: return 'péntek'
    case 6: return 'szombat'
  }
}

export function getWeekDay(weekDayNumber, numberTranslator) {
  return numberTranslator(weekDayNumber)
}

export function getPartyIndicator(currentDay) {
  return currentDay === 'Friday' ? '🎉' : '😞'
}

module.exports = {
  getWeekDay,
  dayNumberToName,
  dayNumberToNameInHungarian,
  getPartyIndicator,
}