import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { 
  Row, Col, FormControl, Button, ControlLabel, FormGroup, Form 
} from 'react-bootstrap';

import * as userActions from  '../../actions/userActions';
import { plRegisterErrors } from '../../utils/plLocale';
import './Register.css';

const required = value => value ? undefined : 'To pole jest wymagane';
const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </FormGroup>
);


class Register extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(user){
    if (user.password !== user.password2) {
      throw new SubmissionError({_error: 'Podane hasła nie są takie same.'});
    }
    this.props.registerUser(user);
  }

  render() {
    return (
      <Row>
        <Col md={6} mdOffset={3}>
          <h4>Rejestracja</h4>

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
              <Field
                name="password2"
                type="password"
                component={renderField}
                label="Powtórz hasło"
                validate={required}
              />

              {this.props.error && <div className="error-field">{this.props.error}</div>}
              {this.props.apiError && <div className="error-field">{plRegisterErrors[this.props.apiError]}</div>}

              <Button
                bsStyle="primary"
                type="submit"
                disabled={this.props.submitting}
                block>
                 Zarejestruj się
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
            <Link to="/login">Masz już konto? Zaloguj się</Link>
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
    registerUser: (user) => dispatch(userActions.registerUser(user))
  }
}


export default reduxForm({form: 'registerForm'})(
  connect(mapStateToProps, mapDispatchToProps)(Register)
);

