import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

class Login extends Component {
  render() {
    return (
      <Row>
        <Col md={6} mdOffset={3}>
          <h4>Logowanie</h4>
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
              <Button bsStyle="primary" type="submit" block>Zaloguj się</Button>
            </FormGroup>
          </form>
          <Link to="register">Nie masz konta? Zarejestruj się.</Link>
        </Col>
      </Row>
    );
  }
}

export default Login;
