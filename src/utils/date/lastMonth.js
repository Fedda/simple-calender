export function lastMonth(date) {
  let lastMonthDate = new Date(date);
  lastMonthDate.setDate(0); //last day previous month
  lastMonthDate.setDate(1);
  return lastMonthDate;
}
