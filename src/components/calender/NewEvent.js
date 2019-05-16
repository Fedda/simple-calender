import React, { Component } from 'react';
import Button from '../common/Button';
import { StyledInput, StyledInputDate } from '../../styles/common/StyledInput';
import * as ls from '../../controllers/events';
import { toDate } from '../../utils/date/toDate';

export default class NewEvent extends Component {
    state = {
        newEventDate: toDate(new Date()),
        newEventContext: '',
        newEvent: {
            day: 0,
            date: undefined,
            context: ''
        },
        duplicateEvent: false
    };

    handleAddEventSubmit = (event) => {
        const { onSubmit, events } = this.props;

        this.setState({ duplicateEvent: false });
        let date = this.state.newEventDate;
        const alreadyExistEvent = events.find((e) => e.date === date);

        event.preventDefault();

        if (alreadyExistEvent) {
            this.setState({ duplicateEvent: true });
        } else {
            let newEvent = {
                day: new Date(date).getDate(),
                date: date,
                context: this.state.newEventContext
            };

            //insert to localstore
            ls.saveEvent(newEvent);
            onSubmit(newEvent);

            //reset input
            this.setState({ newEventDate: toDate(new Date()) });
            this.setState({ newEventContext: '' });
        }
    };
    handleDateChanged = (event) => {
        this.setState({ newEventDate: event.target.value });
    };

    handleNameChanged = (event) => {
        this.setState({ newEventContext: event.target.value });
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
            <form onSubmit={(event) => this.handleAddEventSubmit(event)}>
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

                <Button type="submit" text={'Legg til'} />
                <div>{foundMarkup}</div>
            </form>
        )
    }
}
