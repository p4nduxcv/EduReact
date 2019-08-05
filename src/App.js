import React, { Component } from 'react';
import './App.css';
import Person from '../src/Person/Person';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.col ? 'red' : 'yellow'};
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
    ],
    showPerson: false,
    col: false
  }

  setButtonAction = (newName) => {
    this.setState({
      person: [
        { name: 'Kukku Arju', age: '25' },
        { name: newName, age: '58' },
        { name: 'Anna Porju', age: '24' }
      ],
      otherState: 'some other value',
      showPerson: false
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      person: [
        { name: 'Kukku Arju nameChangeHandler', age: '25' },
        { name: event.target.value, age: '58' },
        { name: 'Anna Porju', age: '24' }
      ]
    })
  }

  togglepersonHandler = () => {
    const doesShow = this.state.showPerson;
    const color = this.state.col;
    this.setState({ showPerson: !doesShow, col: !color });
  }

  deletepersonhandler = (personIndex) => {
      const persons = this.state.person;
      persons.splice(personIndex, 1);
      this.setState({persons:persons});
  }


  render() {
    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.person.map((person, index) => {
            return <Person 
            click={() => this.deletepersonhandler(index)}
            name={person.name} 
            age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi i am react App</h1>
        <p>This is really working</p>
        {/* <Button onClick={() => this.setButtonAction('Pandula Cardo')}>Switch Name</Button> */}
        <Button col={this.state.col} onClick={() => this.togglepersonHandler()}>Switch Name</Button>
        {person}
      </div>
    )
  }
}

export default App;
