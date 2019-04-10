import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../action/index";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  changeInput = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  createNewTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  toggleItem = (e, index) => {
    e.preventDefault();
    this.props.toggleTodo(index);
  };


  render() {
    return (
      <div>
        <form onSubmit={this.createNewTodo}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.changeInput}
          />

          <button type="submit">Add to List</button>
        </form>
        <div>
          {this.props.todo.map((todoItem, index) => {
            return (
              <div>
                <li
                  style={{
                    textDecoration: todoItem.complete ? "line-through" : "none"
                  }}
                  onClick={e => this.toggleItem(e, index)}
                  key={index}
                >
                  {todoItem.todo}
                </li>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(Todo);
