import React, {Component} from "react";

import {BrowserRouter as Router, Route} from "react-router-dom";

import Main from "./pages/Main/Main";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/Main" component={Main} />
      </Router>
    );
  }
}

export default Routes;
