import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <h3 onClick={props.click}>  Hi I am {props.name} and I am {props.age} years old</h3>
      <p> {props.children} </p>
      <input type="text" onChange={props.changed} value={props.name} />

      
    </div>
  )
};




export default person;
