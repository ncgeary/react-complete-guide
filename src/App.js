import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

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

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
              click={()=>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event,person.id)} 
              />
          })}


        </div>

      )
    }


    return (
      <div className="App">

        <button
          style={style}
          onClick={this.togglePersonHandler}>
          Toggle Person</button>

       {persons}

      </div>

    );
  }
}

export default App;
