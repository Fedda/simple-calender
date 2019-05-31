import React from 'react';
import StyledDay from './StyledDay';
import Button from '../common/Button';

class Day extends React.Component {
  render() {
    const { day, onRemove } = this.props;
    const hasEventClassName = hasEvents(day) ? 'day active context' : 'day';

    return (
      <StyledDay>
        <div className={'day-number'}>
          <span>{day.day}</span>
          {hasEvents(day) && (
            <Button
              icon={'close'}
              type={'round'}
              transparent={'true'}
              onClick={onRemove}
            />
          )}
        </div>
        {hasEvents(day) &&
          day.events.map((e) => (
            <div className={hasEventClassName} key={e.fromTime}>
              {e.context}
            </div>
          ))}
      </StyledDay>
    );
  }
}

function hasEvents(day) {
  return Array.isArray(day.events) && day.events.length > 0;
}

export default Day;
