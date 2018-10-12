import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons.js';
import Cockpit from '../components/Cockpit/Cockpit.js';



class App extends Component {
  state = {
    persons:[
      {id: '1', name: 'Max', age: 28},
      {id: '2', name: 'Matt', age: 27},
      {id: '3', name: 'Nick', age: 17}
    ],
    otherState: 'some other value',
    showPerson: false
  }

  deletePersonHandler =(personIndex)=>{
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }


  nameChangedHandler = (event,id) => {

    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {
        ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons})
  }

  togglePersonHandler=()=>{
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  render() {

    let persons = null;
    

    if (this.state.showPerson){
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.state.deletePersonHandler}
          changed={this.state.nameChangedHandler}/>
    }

    return (
      
      <div className={classes.App}>

        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}/>

        {persons}

      </div>

    );
  }
}

export default App;
