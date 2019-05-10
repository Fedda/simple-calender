import React from 'react';
import StyledDay from './StyledDay';
import Button from '../common/Button'

class Day extends React.Component {
  render() {
    const { day, onRemove } = this.props;
    const harActivetiClassName = day.context !== '' ? 'day active' : 'day';

    return (
      <StyledDay className={harActivetiClassName} >
        <div>
          <span>{day.day}</span>
          {day.context !== '' && (
            <Button icon={"close"} onClick={onRemove}>
            </Button>
          )}
        </div>
        <span className="context">{day.context}</span>
      </StyledDay>
    );
  }
}

export default Day;
