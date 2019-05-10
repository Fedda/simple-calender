import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';

import Filter from './components/filter/Page';
import Page from './components/calender/Page';
import StyledNav from './styles/layouts/StyledNav';
import GlobalStyle from './styles/layouts/GlobalStyle';



class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <StyledNav>
          <ul>
            <li>
              <a href="/">Kalender</a>
            </li>
            <li>
              <a href="/filter">Filter</a>
            </li>
          </ul>
        </StyledNav>
        <Router className="container">
          <Page path="/" />
          <Filter path="/filter" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
