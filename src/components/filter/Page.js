import React from 'react';
import { toDate } from '../../utils/date/toDate';
import { lastMonth } from '../../utils/date/lastMonth';
import * as ls from '../../controllers/events';
import DayList from './DayList';

class Page extends React.Component {
  componentDidMount() {
    this.setState({
      filteredEvents: ls.getAllByDateInterval(
        this.state.intervalStartDate,
        this.state.intervalEndDate
      )
    });
  }
  state = {
    intervalStartDate: toDate(lastMonth(new Date())),
    intervalEndDate: toDate(new Date()),
    filteredEvents: []
  };
  rangeEndChanged = (event) => {
    this.setState({ intervalEndDate: event.target.value });
  };
  rangeStartChanged = (event) => {
    this.setState({ intervalStartDate: event.target.value });
  };
  handleFilteredDelete = (clickedEvent) => {
    let newArray = this.state.filteredEvents.filter(
      (e) => e.date !== clickedEvent.date
    );
    ls.deleteEvent(clickedEvent.date);
    this.setState({
      filteredEvents: newArray
    });
  };
  handleSearchEventSubmit = (event) => {
    event.preventDefault();
    let events = ls.getAllByDateInterval(
      this.state.intervalStartDate,
      this.state.intervalEndDate
    );
    this.setState({ filteredEvents: events });
  };
  render() {
    const filteredEvents = this.state.filteredEvents.map((d) => {
      return (
        <DayList
          key={d.day}
          day={d}
          onRemove={() => this.handleFilteredDelete(d)}
        />
      );
    });

    return (
      <div>
        Datointervall:
        <form onSubmit={(event) => this.handleSearchEventSubmit(event)}>
          <input
            placeholder="13/02/2019"
            type="date"
            value={this.state.intervalStartDate}
            onChange={this.rangeStartChanged}
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
          />
          <input
            placeholder="20/02/2019"
            type="date"
            value={this.state.intervalEndDate}
            onChange={this.rangeEndChanged}
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
          />
          <input type="submit" value="Søk" />
        </form>
        <div>{filteredEvents}</div>
        <div />
      </div>
    );
  }
}

export default Page;
