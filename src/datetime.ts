export type DayNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export function dayNumberToName(number: DayNumber): string {
  switch (number) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
}

export function dayNumberToNameInHungarian(number: DayNumber): string {
  switch (number) {
    case 0:
      return "vasárnap";
    case 1:
      return "hétfő";
    case 2:
      return "kedd";
    case 3:
      return "szerda";
    case 4:
      return "csütörtök";
    case 5:
      return "péntek";
    case 6:
      return "szombat";
  }
}

export type NumberTranslator = (weekDayNumber: number) => string;

export function getWeekDay(
  weekDayNumber: number,
  numberTranslator: NumberTranslator
): string {
  return numberTranslator(weekDayNumber);
}

export type PartyIndicator = "🎉" | "😞";

export function getPartyIndicator(currentDay: string): PartyIndicator {
  return currentDay === "Friday" ? "🎉" : "😞";
}

export function getCurrentDate(dateProvider: () => Date): string {
  const currentDate = dateProvider();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}
