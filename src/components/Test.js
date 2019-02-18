import React from 'react';

class Test extends React.Component {
  render() {
    const { test } = this.props;
    return <div>{test}</div>;
  }
}

export default Test;
