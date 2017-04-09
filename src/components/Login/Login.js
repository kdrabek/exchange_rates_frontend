import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { 
  Row, Col, FormControl, Button, ControlLabel, FormGroup, Form 
} from 'react-bootstrap';

import * as userActions from '../../actions/userActions';
import { plLoginErrors } from '../../utils/plLocale';
import './Login.css';

const required = value => value ? undefined : 'To pole jest wymagane';
const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </FormGroup>
);


class Login extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }
  
  submitForm(user){
    this.props.loginUser(user);
  }

  render() {
    return (
      <Row>
        <Col md={6} mdOffset={3}>
          <h4>Logowanie</h4>

            <Form onSubmit={this.props.handleSubmit(this.submitForm)}>
              <Field
                name="email"
                type="email"
                component={renderField}
                label="Email"
                validate={required}
              />
              <Field
                name="password"
                type="password"
                component={renderField}
                label="Hasło"
                validate={required}
              />

              {this.props.error && <div className="error-field">{this.props.error}</div>}
              {this.props.apiError && <div className="error-field">{plLoginErrors[this.props.apiError]}</div>}

              <Button
                bsStyle="primary"
                type="submit"
                disabled={this.props.submitting}
                block>
                Zaloguj się
              </Button>
              <Button
                bsStyle="warning"
                type="button"
                disabled={this.props.pristine || this.props.submitting}
                onClick={this.props.reset}
                block>
                Reset
              </Button>
            </Form>
            <Link to="/register">Nie masz konta? Zarejestruj się.</Link>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    apiError: state.user.apiError,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(userActions.loginUser(user))
  }
}

export default reduxForm({form: 'loginForm'})(
  connect(mapStateToProps, mapDispatchToProps)(Login)
);
