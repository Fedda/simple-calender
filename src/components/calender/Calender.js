import React from 'react';
import { createMonth } from '../../utils/date/monthdays';
import Day from './Day';
import { lastMonth } from '../../utils/date/lastMonth';
import { nextMonth } from '../../utils/date/nextMonth';
import { getMonthName } from '../../utils/date/monthName';
import style from 'styled-components';
import './Calender.css';

const RedButton = style.span`
  color:red;
  background-color:blue;
`;
class Calender extends React.Component {
  componentDidMount() {}
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
      let day = <Day key={d.date} day={d} onRemove={() => {}} />;
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
      <div className="Calender">
        <div className="nav">
          <button className="previous round" onClick={this.prevMonth}>
            Forrgie
          </button>
          <div>
            <RedButton className="monthname">{date}</RedButton>
          </div>
          <button onClick={this.nextMonth}>Neste</button>
        </div>
        <div className="day-container">{mergedItems}</div>
      </div>
    );
  }
}

export default Calender;
