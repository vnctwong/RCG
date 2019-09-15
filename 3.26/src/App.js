import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, I'm a react App </h1>
        <p>This is working</p>
        <Person name="max" age="28" />
        <Person name="mamu" age="29" >My hobbies: Racing</Person>
        <Person name="steph" age="26" />
      </div>
      // <h1>Another heading</h1>
    );
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now'))
  }
}

export default App;
