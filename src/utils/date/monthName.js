import { monthNames } from '../../constants/months';

export function getMonthName(month) {
  var month = monthNames()[month];
  return month;
}
