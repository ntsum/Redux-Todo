import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

import Todo from "./component/todo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.toDoList}</h1>
        <Todo />
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    toDoList: state.title
  };
}

export default connect(
  mapStatetoProps,
  {}
)(App);
