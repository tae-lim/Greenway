import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Expenses from './Expenses.jsx';
import Savings from './Savings.jsx';
import Loans from './Loans.jsx';
import Retirement from './Retirement.jsx';
import Settings from './Settings.jsx';

const App = ({ match }) => {
  return (
    <Router>
      <div>
        <div class="site-head"><h3 class="head-text">Greenway&nbsp;</h3></div>
        <ul class="nav-bar">
          <Link to="/home">
            <li class="nav-btn">Expenses</li>
          </Link>
          <Link to="/savings">
            <li class="nav-btn">Savings</li>
          </Link>
          <Link to="/loans">
            <li class="nav-btn">Loans</li>
          </Link>
          <Link to="/retirement">
            <li class="nav-btn">Retirement</li>
          </Link>
          <Link to="/settings">
            <li class="nav-btn">Settings</li>
          </Link>
        </ul>
        <Route path='/home' component={Expenses} />
        <Route path='/savings' component={Savings} />
        <Route path='/loans' component={Loans} />
        <Route path='/retirement' component={Retirement} />
        <Route path='/settings' component={Settings} />
      </div>
    </Router>
  )
}

export default App;