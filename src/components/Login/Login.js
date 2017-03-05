import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col, FormControl, Button, ControlLabel, FormGroup } from 'react-bootstrap';
import { LocalForm, Control } from 'react-redux-form';
import * as ratesActions from '../../actions/actions';
import { connect } from 'react-redux';

import './Login.css';
import { plLoginErrors } from '../../utils/plLocale';

class Login extends Component {

  handleSubmit(user){
    this.props.dispatch(ratesActions.loginUser(user));
  }

  render() {
    let error = this.props.error ? this.props.error : null;
    return (
      <Row>
        <Col md={6} mdOffset={3}>
          <h4>Logowanie</h4>
          
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <FormGroup>
                <ControlLabel>Email:</ControlLabel>
                <Control type="email" model=".email" component={FormControl} label="ddd"/>
              </FormGroup>

              <FormGroup>
                <ControlLabel>Hasło:</ControlLabel>
                <Control type="password" model=".password" component={FormControl}/>
              </FormGroup>

              <FormGroup>
                <Button bsStyle="primary" type="submit" block>Zaloguj</Button>
              </FormGroup>
            </LocalForm>

            <div className={ error ? 'errors': ''}>{plLoginErrors[error]}</div>
          
          <Link to="/register">Nie masz konta? Zarejestruj się.</Link>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    error: state.user.error
  };
}

export default connect(mapStateToProps)(Login);
