import React from 'react';
import './Day.css';

class Day extends React.Component {
  render() {
    const { day, onRemove } = this.props;
    const harActivetiClassName = day.context !== '' ? 'Day active' : 'Day';

    return (
      <div className={harActivetiClassName}>
        <div>
          <span>{day.day}</span>
          {day.context !== '' && (
            <button className="removeButton" onClick={onRemove}>
              X
            </button>
          )}
        </div>
        <span className="context">{day.context}</span>
      </div>
    );
  }
}

export default Day;
