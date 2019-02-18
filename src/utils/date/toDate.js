export function toDate(date) {
  var date = date;
  if (Object.prototype.toString.call(date) === '[object String]') {
    date = new Date(date);
  }
  date = `${date.getFullYear()}-${`${date.getMonth() + 1}`.padStart(
    2,
    0
  )}-${`${date.getDate()}`.padStart(2, 0)}`;
  return date;
}
