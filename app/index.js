import "@babel/polyfill";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

  class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        parent: [
          {motherName:''},
          {fatherName: ''},
          {groupName:''},
          {firstNameofChild: ''},
          {email: ''},
          {password: ''}
        ]
      }
    }

      handleRegistrationInput(event) {
        const { target: { name, value } } = event
        this.setState( { [name]: value })
        }

    render () {
    return (
      <div className="App">
      <Navbar bg="light" expand="lg">
      <Navbar.Brand>Kindergarten St. Johannes</Navbar.Brand>
      </Navbar>

<div class="container">
<div class="modal-body row">
<div class="first-column">
        <div className = 'Registration'>
        <h1>Anmelden</h1>
        </div>
        <Form action="/einfügen" method="POST">
        <Form.Group>
          <Form.Label>
            Name der Mutter:
              <Form.Control
                name="motherName"
                type="text"
                value={this.state.motherName}
                onChange={this.handleRegistrationInput} />
          </Form.Label>
          </Form.Group>
          <Form.Group>
          <Form.Label>
            Name des Vaters:
              <Form.Control
                name="fatherName"
                type="text"
                value={this.state.fatherName}
                onChange={this.handleRegistrationInput} />
          </Form.Label>
          </Form.Group>
          <Form.Group>
          <Form.Label>
            Vorname des Kindes:
              <Form.Control
                name="firstNameofChild"
                type="text"
                value={this.state.firstNameofChild}
                onChange={this.handleRegistrationInput} />
          </Form.Label>
          </Form.Group>
          <Form.Group>
          <Form.Label>
            Gruppenname:
              <Form.Control
                name="groupName"
                type="text"
                value={this.state.groupName}
                onChange={this.handleRegistrationInput} />
          </Form.Label>
          </Form.Group>
          <Form.Group>
          <Form.Label>
            Email:
              <Form.Control
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleRegistrationInput} />
          </Form.Label>
          </Form.Group>
          <Form.Group>
          <Form.Label>
            Passwort:
              <Form.Control
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleRegistrationInput} />
          </Form.Label>
          </Form.Group>
          <input type = "submit" value = "Anmeldung abschicken" />
        </Form>
        </div>
        <div class="second-column">
        <div className = 'Login'>
        <h1>Login</h1>
        </div>
        </div>
        </div>
        </div>
        </div>

    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
