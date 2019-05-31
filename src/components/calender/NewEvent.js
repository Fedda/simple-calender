import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { StyledInput, StyledInputDate } from '../../styles/common/StyledInput';
import * as ls from '../../controllers/events';
import { toDate as toDateConverter } from '../../utils/date/toDate';

export default class NewEvent extends Component {
  state = {
    newEventDate: toDateConverter(new Date()),
    newEventContext: '',
    newEventFromTime: '08:00',
    newEventToTime: '10:00',
    duplicateEvent: false
  };

  handleAddEventSubmit = (event) => {
    const { onSubmit, events } = this.props;

    this.setState({ duplicateEvent: false });
    let date = this.state.newEventDate;
    const fromTime = this.state.newEventFromTime;
    const toTime = this.state.newEventToTime;
    const context = this.state.newEventContext;

    let day = events.find((e) => e.date === date);
    event.preventDefault();

    const newEvent = {
      fromTime: fromTime,
      toTime: toTime,
      type: 1,
      context: context
    };

    //todo move to utils
    const isOverlapping = day.events.find(function(e) {
      //bad input
      debugger;
      if (toTime < fromTime) {
        return true;
      }
      if (fromTime > toTime) {
        return true;
      }

      //bellow
      if (
        fromTime <= e.fromTime &&
        toTime < e.fromTime &&
        fromTime < e.toTime
      ) {
        return false;
      }
      //above
      if (fromTime > e.fromTime && fromTime > e.toTime && toTime > e.toTime) {
        return false;
      }
      return true;
    });

    if (isOverlapping) {
      //need to check dateintervall
      this.setState({ duplicateEvent: true });
    } else if (day) {
      day.events = [...day.events, newEvent];
    } else {
      //getDat.. add to list;
      day = {
        day: new Date(date).getDate(),
        date: date,
        events: [newEvent]
      };
    }
    //insert to localstore
    ls.saveEvent(day);
    onSubmit(day);

    //reset input
    this.setState({ newEventDate: toDateConverter(new Date()) });
    this.setState({ newEventContext: '' });
  };
  handleDateChanged = (event) => {
    this.setState({ newEventDate: event.target.value });
  };

  handleNameChanged = (event) => {
    this.setState({ newEventContext: event.target.value });
  };
  handleFromTimeChanged = (event) => {
    this.setState({ newEventFromTime: event.target.value });
  };
  handleToTimeChanged = (event) => {
    this.setState({ newEventToTime: event.target.value });
  };

  render() {
    let foundMarkup = '';
    if (this.state.duplicateEvent) {
      foundMarkup = (
        <div>
          Det finnes allerede en oppføring på den dagen, slett den eller legg
          oppføringen på annen dag
        </div>
      );
    }
    return (
      <StyledForm onSubmit={(event) => this.handleAddEventSubmit(event)}>
        <StyledInput>
          <input
            placeholder="Skriv inn aktivitet"
            onChange={(event) => this.handleNameChanged(event)}
            value={this.state.newEventContext}
            type="text"
            pattern=".{3,}"
            required
            title="minimum 3 karakterer"
            id="activity"
            className="form__field"
          />
          <label htmlFor="activity" className="form__label">
            Skriv inn aktivitet
          </label>
        </StyledInput>
        <StyledInputDate>
          <input
            placeholder="13/02/2019"
            type="date"
            value={this.state.newEventDate}
            onChange={(event) => this.handleDateChanged(event)}
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            className="form__field"
            id="datepicker"
          />
          <label htmlFor="datepicker" className="form__label">
            Neste avtale
          </label>
        </StyledInputDate>
        <StyledInput>
          <input
            type="time"
            id="fromDate"
            placeholder="08:00"
            className="form__field"
            value={this.state.newEventFromTime}
            onChange={(event) => this.handleFromTimeChanged(event)}
          />
          <label htmlFor="fromDate" className="form__label">
            Fra
          </label>
        </StyledInput>
        <StyledInput>
          <input
            type="time"
            id="toDate"
            placeholder="10:00"
            className="form__field"
            value={this.state.newEventToTime}
            onChange={(event) => this.handleToTimeChanged(event)}
          />
          <label htmlFor="toDate" className="form__label">
            Til
          </label>
        </StyledInput>

        <Button type="submit" text={'Legg til'} />
        <div>{foundMarkup}</div>
      </StyledForm>
    );
  }
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
