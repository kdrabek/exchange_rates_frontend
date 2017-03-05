import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col, FormControl, Button, ControlLabel, FormGroup } from 'react-bootstrap';
import { LocalForm, Control } from 'react-redux-form';

class Login extends Component {

  handleSubmit(e) {
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    e.preventDefault();
  }

  render() {
    return (
      <Row>
        <Col md={6} mdOffset={3}>
          <h4>Logowanie</h4>
          
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <FormGroup>
                <ControlLabel>Email:</ControlLabel>
                <Control type="email" model=".username" component={FormControl} label="ddd"/>
              </FormGroup>

              <FormGroup>
                <ControlLabel>Hasło:</ControlLabel>
                <Control type="password" model=".password" component={FormControl}/>
              </FormGroup>

              <FormGroup>
                <Button bsStyle="primary" type="submit" block>Zarejestruj</Button>
              </FormGroup>
            </LocalForm>
          
          <Link to="/register">Nie masz konta? Zarejestruj się.</Link>
        </Col>
      </Row>
    );
  }
}

export default Login;
