import React, { Component } from "react";
import classes from "./App.css";
//import Person from "../components/Persons/Person/Person";
//import Radium, {StyleRoot} from 'radium'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: "A", name: "Kai", age: 25 },
      { id: "B", name: "Ha", age: 20 }
    ],
    otherState: "some other state",
    showPersons: false
  };

  // switchNameHandler = newName => {
  //   //console.log('Was clicked!')
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 25 },
  //       { name: "Ha", age: 15 }],
  //     showPersons: false
  //   });
  // };

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons;//.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const isShow = this.state.showPersons;
    this.setState({ showPersons: !isShow });
  };

  render() {
    // const style = {
    //   backgroundColor: "blue",
    //   color: "white",
    //   font: "inherit",
    //   border: "1x solid blue",
    //   padding: "8x", 
    //   cursor: "pointer"
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    
    if (this.state.showPersons) {
      persons = //(
        //<div>
          <Persons
            persons = {this.state.persons}
            click = {this.state.deletePersonHandler}
            changed= {this.state/this.nameChangeHandler}
          ></Persons>
          {/* {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })} */}
        //</div>
      //);

      //style.backgroundColor = "red";
      // style[':hover']= {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }



    return (
      <div className= {classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          click={this.togglePersonsHandler}
          />
        {persons}
      </div>
    );

    //return React.createElement('div',{className:'App'}, React.createElement('h1',null,'How about now'),React.createElement(Person(this.state.persons[0]),null));
  }
}
export default App;
