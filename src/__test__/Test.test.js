import React from 'React';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import Test from '../components/Test';

test('test', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Test test={'test'} />, container);
  expect(container.innerHTML).toBe('<div>test</div>');
});

test('snapshot', () => {
  const c = create(<Test />);
  expect(c.toJSON()).toMatchSnapshot();
});
