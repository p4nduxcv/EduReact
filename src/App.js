import React, { Component } from 'react';
import './App.css';
import Person from '../src/Person/Person';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

class App extends Component {

  state = {
    person: [
      { name: 'Kukku', age: '25' },
      { name: 'Arju', age: '23' }
    ]
  }

  setButtonAction = (newName) => {
    this.setState( {
      person: [
        { name: 'Kukku Arju', age: '25' },
        { name: newName, age: '58' },
        { name: 'Anna Porju', age: '24' }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState( {
      person: [
        { name: 'Kukku Arju', age: '25' },
        { name: event.target.value, age: '58' },
        { name: 'Anna Porju', age: '24' }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi i am react App</h1>
        <p>This is really working</p>
        <Button onClick={() => this.setButtonAction('Pandula Cardo')}>Switch Name</Button>
        <Person 
        name={this.state.person[0].name} 
        age={this.state.person[0].age} 
        click={this.setButtonAction.bind(this,'My3Cardo')} 
        />

        <Person name={this.state.person[1].name} 
        age={this.state.person[1].age} 
        click={this.setButtonAction.bind(this,'Aponsu')} 
        changed={this.nameChangeHandler}
        />

        <Person name="arju" age="24" />
      </div>
    )
  }
}

export default App;
