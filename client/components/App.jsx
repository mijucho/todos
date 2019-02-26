import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import SendTodo from "./SendTodo";

import { getTodos } from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getTodos());
  }
  render() {
    return (
      <Router>
        <div>
          <h1>TODO List</h1>
          <Route exact path="/" component={Home} />

          <Route path="/todo" component={SendTodo} />
          {/* <Route path="/:category" component={Category} />
          <Route path="/:completed" component={Completed} />
          <Route path="/priority" component={Priority} />  */}
        </div>
      </Router>
    );
  }
}

export default connect()(App);
