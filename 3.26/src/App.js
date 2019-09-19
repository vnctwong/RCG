import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "max", age: 28 },
      { name: "manu", age: 29 },
      { name: "steph", age: 26 }
    ],
    otherState: 'some other state'
  };

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    // this.state.persons[0].name = 'maxy';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "manu", age: 29 },
        { name: "stephanie", age: 27 }
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <h1> Hi, I'm a react App </h1>
        <p>This is working</p>
        <button onClick={this.switchNameHandler.bind(this, 'maximilion')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'max!')}
        >
          My hobbies: racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
      // <h1>Another heading</h1>
    );
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now'))
  }
}

export default App;
