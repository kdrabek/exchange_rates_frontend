import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

class Register extends Component {
  render() {
    return (
      <Row>
        <Col md={6} mdOffset={3}>
          <h4>Rejestracja</h4>
          <form>
            <FormGroup>
              <ControlLabel htmlFor="email">Email: </ControlLabel>
              <FormControl id="email"/>
            </FormGroup>
            <FormGroup>
              <ControlLabel htmlFor="password">Hasło: </ControlLabel>
              <FormControl id="password"/>
            </FormGroup>
            <FormGroup>
              <ControlLabel htmlFor="password2">Powtórz hasło: </ControlLabel>
              <FormControl id="password2"/>
            </FormGroup>
            <FormGroup>
              <Button bsStyle="primary" type="submit" block>Zarejestruj się</Button>
            </FormGroup>
          </form>
          <Link to="login">Masz już konto? Zaloguj się</Link>
        </Col>
      </Row>
    );
  }
}

export default Register;
