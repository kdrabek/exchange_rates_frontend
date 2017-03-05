import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col, FormControl, Button, ControlLabel, FormGroup } from 'react-bootstrap';
import { LocalForm, Control } from 'react-redux-form';
import { connect } from 'react-redux';

class Register extends Component {

  handleSubmit(values){
    console.log("submit ", values);
  }

  render() {
    return (
      <Row>
        <Col md={6} mdOffset={3}>
          <h4>Rejestracja</h4>

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
                <ControlLabel>Powtórz hasło:</ControlLabel>
                <Control type="password" model=".password2" component={FormControl}/>
              </FormGroup>

              <FormGroup>
                <Button bsStyle="primary" type="submit" block>Zarejestruj</Button>
              </FormGroup>
            </LocalForm>

            <Link to="/login">Masz już konto? Zaloguj się</Link>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}

export default connect(mapStateToProps)(Register);
