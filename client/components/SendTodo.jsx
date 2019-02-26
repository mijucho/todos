import React from "react";
import { connect } from "react-redux";
import { sendTodo } from "../actions";

class SendTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      category: "",
      priority: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const list = {
      task: this.state.task,
      category: this.state.category,
      priority: this.state.priority
    };

    this.props.dispatch(sendTodo(list));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Item:</label> <br />
            <input
              type="text"
              name="task"
              onChange={this.onChange}
              value={this.state.task}
            />
          </div>
          <br />
          <div>
            <label>Category:</label> <br />
            <input
              type="text"
              name="category"
              onChange={this.onChange}
              value={this.state.category}
            />
          </div>
          <br />
          <div>
            <label>Priority:</label> <br />
            <input
              type="text"
              name="priority"
              onChange={this.onChange}
              value={this.state.priority}
            />
          </div>
          <button type="submit">ADD</button>
        </form>
      </div>
    );
  }
}
// function mapStateToProps(state) {
//   return {
//     todos: state.todos
//   };
// }
export default connect()(SendTodo);
