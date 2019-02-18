import { daysInMonth } from './daysInMonth';
import { toDate } from './toDate';
export function createMonth(year, month) {
  if (month < 0 || month > 12) {
    throw new TypeError(`Not a valid month{0}`, month);
  }
  const days = [];
  const numberOfDaysInMonth = daysInMonth(year, month, 0);
  for (let i = 1; i < numberOfDaysInMonth + 1; i++) {
    days.push({
      day: i,
      date: toDate(new Date(year, month, i))
    });
  }
  return days;
}
