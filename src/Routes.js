import React, {Component} from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Main from './Pages/Main/Main';

class Routes extends Component {
  render () {
    return (
      <Router>
        <Route exact path="/reponsive_web-project" component={Main} />
      </Router>
    );
  }
}

export default Routes;
