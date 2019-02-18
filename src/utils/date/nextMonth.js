export function nextMonth(date) {
  let nextMonthDate = new Date(date);
  nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
  return nextMonthDate;
}
