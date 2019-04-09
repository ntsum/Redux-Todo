import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <form>
          <input 
          placeholder = "add new todo"/>
        </form>
        <button>Add</button>
        <button>Clear</button>
      </div>
    );
  }
}

export default App;
