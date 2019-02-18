import { sortBy } from '../utils/sortBy';

export function saveEvent(event) {
  localStorage.setItem(event.date, JSON.stringify(event));
}
export function getAll() {
  const events = [];
  for (let i = 0, len = localStorage.length; i < len; ++i) {
    events.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  return events;
}

export function getAllByMonth(month) {
  const result = [];
  getAll().forEach((event) => {
    if (new Date(event.date).getMonth == month) {
      result.push(event);
    }
  });
  return result;
}

export function getByKey(key) {
  const obj = ocalStorage.getItem(key);
  return JSON.parse(obj);
}

export function deleteEvent(key) {
  localStorage.removeItem(key);
}
//its hard to query and sort using localstorage
export function getAllByDateInterval(fromdate, todate) {
  var result = [];
  getAll().forEach((event) => {
    if (
      new Date(event.date) >= new Date(fromdate) &&
      new Date(event.date) <= new Date(todate)
    ) {
      result.push(event);
    }
  });
  var sorted = result.sort(sortBy('date'));
  return sorted;
}
export function mockEvents() {
  localStorage.setItem(
    '2019-02-10',
    JSON.stringify({
      day: 10,
      date: '2019-02-10',
      context: 'Test 1'
    })
  );
  localStorage.setItem(
    '2019-02-17',
    JSON.stringify({
      day: 17,
      date: '2019-02-17',
      context: 'Test 2'
    })
  );
  localStorage.setItem(
    '2019-03-14',
    JSON.stringify({
      day: 14,
      date: '2019-03-14',
      context: 'Test 3'
    })
  );
}
