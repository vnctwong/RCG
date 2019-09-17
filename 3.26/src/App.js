import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "max", age: 28 },
      { name: "manu", age: 29 },
      { name: "steph", age: 26 }
    ],
    otherState: "some other value"
  });

  const [otherState, setOtherState] = useState("some other value");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // personsState.persons[0].name = 'maximilion';
    setPersonsState({
      persons: [
        { name: "maximilion", age: 28 },
        { name: "manu", age: 29 },
        { name: "stephanie", age: 27 }
      ]
    });
    console.log("button onClick called switchNameHandler");
  };

  return (
    <div className="App">
      <h1> Hi, I'm a react App </h1>
      <p>This is working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My hobbies: racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
    // <h1>Another heading</h1>
  );
};

export default app;
