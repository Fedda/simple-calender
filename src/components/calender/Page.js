import React from 'react';
import styled from 'styled-components';
import Calender from './Calender';
import { toDate } from '../../utils/date/toDate';
import * as ls from '../../controllers/events';
import Button from '../common/Button';
import { StyledInput, StyledInputDate } from '../../styles/common/StyledInput';

class Page extends React.Component {
  componentDidMount() {
    //ls.mockEvents();
    this.setState({ events: ls.getAll() });
  }
  state = {
    newEventDate: toDate(new Date()),
    newEventContext: '',
    newEvent: {
      day: 0,
      date: undefined,
      context: ''
    },
    events: [],
    duplicateEvent: false
  };
  newEventDateChanged = (event) => {
    this.setState({ newEventDate: event.target.value });
  };

  newEventContext = (event) => {
    this.setState({ newEventContext: event.target.value });
  };

  handleDelete = (clickedEvent) => {
    let newArray = this.state.events.filter(
      (e) => e.date !== clickedEvent.date
    );
    ls.deleteEvent(clickedEvent.date);
    this.setState({
      events: newArray
    });
  };

  handleAddEventSubmit = (event) => {
    this.setState({ duplicateEvent: false });
    let date = this.state.newEventDate;
    const alreadyExistEvent = this.state.events.find((e) => e.date === date);

    event.preventDefault();

    if (alreadyExistEvent) {
      this.setState({ duplicateEvent: true });
    } else {
      let newEvent = {
        day: new Date(date).getDate(),
        date: date,
        context: this.state.newEventContext
      };

      //insert
      ls.saveEvent(newEvent);
      this.setState({ events: [newEvent, ...this.state.events] });

      //reset input
      this.setState({ newEventDate: toDate(new Date()) });
      this.setState({ newEventContext: '' });
    }
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
      <div>
        <h1>Enkel kalender</h1>
        <StyledForm onSubmit={(event) => this.handleAddEventSubmit(event)}>
          <StyledInput>
            <input
              placeholder="Skriv inn aktivitet"
              onChange={(event) => this.newEventContext(event)}
              value={this.state.newEventContext}
              type="text"
              pattern=".{3,}"
              required
              title="minimum 3 karakterer"
              id="activity"
              className="form__field"
            />
            <label for="activity" className="form__label">
              Skriv inn aktivitet
            </label>
          </StyledInput>

          <StyledInputDate>
            <input
              placeholder="13/02/2019"
              type="date"
              value={this.state.newEventDate}
              onChange={(event) => this.newEventDateChanged(event)}
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              class="form__field"
              id="datepicker"
            />
            <label for="datepicker" className="form__label">
              Neste avtale
            </label>
          </StyledInputDate>

          <div>
            <Button type="submit" text={'Legg til'} />
          </div>
        </StyledForm>
        <div>{foundMarkup}</div>
        <div>
          <Calender events={this.state.events} onRemove={this.handleDelete} />
        </div>
        <div />
      </div>
    );
  }
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default Page;
