import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: '0', name: "max", age: 28 },
      { id: '1', name: "manu", age: 29 },
      { id: '2', name: "steph", age: 26 }
    ],
    otherState: 'some other state',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      p => { return p.id === id }
    );

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: [person]
    })
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      bordor: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Hi, I'm a react App </h1>
        <p>This is working</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle persons</button>
        {persons}
      </div >
      // <h1>Another heading</h1>
    );
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now'))
  }
}

export default App;
