import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import List from './components/List'
import Add from './components/Add'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">List</Link></li>
            <li><Link to="/add">Add data</Link></li>
          </ul>
          <hr />
          <Route exact path="/" component={List} />
          <Route path="/form/:id?" component={Add} />
        </div>
      </Router>
    );
  }
}

export default App;
