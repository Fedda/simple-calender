import React from 'react';
import './DayList.css';

class DayList extends React.Component {
  render() {
    const { day, onRemove } = this.props;
    return (
      <div className="DayList">
        <div>
          {day.context !== '' && (
            <button className="removeButton" onClick={onRemove}>
              X
            </button>
          )}
          <span>{day.date}</span>
        </div>
        <span className="context">{day.context}</span>
      </div>
    );
  }
}

export default DayList;
