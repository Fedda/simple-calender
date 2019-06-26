import React from 'react';
import styled from 'styled-components';
import Calender from './Calender';
import * as ls from '../../controllers/events';
import NewEvent from './NewEvent';

class Page extends React.Component {
  componentDidMount() {
    //ls.mockEvents();
    this.setState({ events: ls.getAll() });
  }

  state = {
    events: []
  };
  handleNewEvent = (event) => {
    this.setState({ events: [event, ...this.state.events] });
  };
  handleDelete = (day, fromTime) => {
    const filtered = this.state.events.filter((e) => e.date !== day.date);
    day.events = day.events.filter((e) => e.fromTime !== fromTime);

    if (day.events.length > 0) {
      this.setState({
        events: [day, ...filtered]
      });
    } else {
      this.setState({
        events: filtered
      });
    }
    ls.deleteEvent(day);
  };

  render() {
    return (
      <div>
        <h1>Enkel kalender</h1>
        <NewEvent events={this.state.events} onSubmit={this.handleNewEvent} />
        <div>
          <Calender events={this.state.events} onRemove={this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default Page;
