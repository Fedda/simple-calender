import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/Test';
import Filter from './components/filter/Page';
import Page from './components/calender/Page';
import './App.css';
import { Router, Link } from '@reach/router';

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="app">
          <ul className="container">
            <li>
              <a href="/">Kalender</a>
            </li>
            <li>
              <a href="/filter">Filter</a>
            </li>
          </ul>
        </nav>
        <Router>
          <Page path="/" />
          <Filter path="/filter" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
