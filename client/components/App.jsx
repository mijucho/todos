import React from "react";
import { connect } from "react-redux";

import { getTodos } from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getTodos());
  }
  render() {
    return (
      <div>
        <h1>TODOS</h1>
        <ul>
          {this.props.todos.map(todos => {
            return <li>{todos.task}</li>;
          })}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}
export default connect(mapStateToProps)(App);
