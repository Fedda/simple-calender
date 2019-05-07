import React from 'react';
import StyledDay from './StyledDay';

class Day extends React.Component {
  render() {
    const { day, onRemove } = this.props;
    const harActivetiClassName = day.context !== '' ? 'day active' : 'day';

    return (
      <StyledDay className={harActivetiClassName}>
        <div>
          <span>{day.day}</span>
          {day.context !== '' && (
            <button className="removeButton" onClick={onRemove}>
              X
            </button>
          )}
        </div>
        <span className="context">{day.context}</span>
      </StyledDay>
    );
  }
}

export default Day;
