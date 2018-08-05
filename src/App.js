import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { initializeStore } from './store'

import List from './components/List'
import Add from './components/Add'

const store = initializeStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
