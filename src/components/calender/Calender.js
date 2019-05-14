import React from 'react';
import { createMonth } from '../../utils/date/monthdays';
import Day from './Day';
import { lastMonth } from '../../utils/date/lastMonth';
import { nextMonth } from '../../utils/date/nextMonth';
import { getMonthName } from '../../utils/date/monthName';
import StyledCalender from './StyledCalender';
import Button from '../common/Button'

class Calender extends React.Component {
  componentDidMount() { }
  handleDelete = (clickedEvent) => {
    this.setState({
      events: [this.state.events.filter((e) => e.day !== clickedEvent.day)]
    });
  };
  prevMonth = (e) => {
    this.setState({
      selectedMonth: lastMonth(this.state.selectedMonth)
    });
  };
  nextMonth = (e) => {
    this.setState({
      selectedMonth: nextMonth(this.state.selectedMonth)
    });
  };

  state = {
    selectedMonth: new Date()
  };
  render() {
    const { events, onRemove } = this.props;

    const monthdays = createMonth(
      this.state.selectedMonth.getFullYear(),
      this.state.selectedMonth.getMonth()
    );
    const monthdaysCalender = monthdays.map((obj) => {
      return { ...obj, context: '' };
    });

    const mergedItems = monthdaysCalender.map((d) => {
      let day = <Day key={d.date} day={d} onRemove={() => { }} />;
      let hasEvent = events.find((e) => e.context !== '' && d.date === e.date);
      if (hasEvent) {
        return (
          <Day key={hasEvent.day} day={hasEvent} onRemove={() => onRemove(d)} />
        );
      }
      return day;
    });

    const date =
      getMonthName(this.state.selectedMonth.getMonth()) +
      ' ' +
      this.state.selectedMonth.getFullYear();

    return (
      <StyledCalender>
        <nav>
          <Button icon={"navigate_before"} type={"round"} onClick={this.prevMonth}>
            Forrgie
          </Button>
          <div>
            <div className="monthname">{date}</div>
          </div>
          <Button icon={"navigate_next"} type={"round"} onClick={this.nextMonth}>Neste</Button>
        </nav>
        <div className="day-container">{mergedItems}</div>
      </StyledCalender>
    );
  }
}

export default Calender;
