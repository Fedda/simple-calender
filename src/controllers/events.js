import { sortBy } from '../utils/sortBy';

export function saveEvent(event) {
  //FYI: Calling setItem() with a named key that already exists will silently overwrite the previous value.
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
  const obj = localStorage.getItem(key);
  return JSON.parse(obj);
}

export function deleteEvent(day) {
  localStorage.removeItem(day.date);
  if (day.events.length > 0) {
    saveEvent(day);
  }
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
  const event1 = {
    fromTime: '10:30',
    toTime: '12:30',
    type: 1
  };

  const event2 = {
    fromTime: '13:30',
    toTime: '14:30',
    type: 2
  };

  const event3 = {
    fromTime: '15:30',
    toTime: '16:30',
    type: 3
  };

  const day1 = {
    id: 1,
    date: '2019-05-31',
    events: [event1]
  };
  const day2 = {
    id: 1,
    date: '2019-06-01',
    events: [event2]
  };
  const day3 = {
    id: 1,
    date: '2019-06-02',
    events: [event2, event3]
  };

  localStorage.setItem(day1.date, JSON.stringify(day1));
  localStorage.setItem(day2.date, JSON.stringify(day2));
  localStorage.setItem(day3.date, JSON.stringify(day3));
}
