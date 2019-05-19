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
  handleDelete = (event) => {
    let newArray = this.state.events.filter((e) => e.date !== event.date);
    ls.deleteEvent(event.date);
    this.setState({
      events: newArray
    });
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

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default Page;
