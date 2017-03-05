import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col, FormControl, Button, ControlLabel, FormGroup, Form } from 'react-bootstrap';
import { Field, reduxForm, SubmissionError } from 'redux-form';

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

  submitForm(values){
    if (values.password !== values.password2) {
      throw new SubmissionError({_error: 'Podane hasła nie są takie same.'});
    }
    console.log("submit ", values);
  }

  render() {
    return (
      <Row>
        <Col md={6} mdOffset={3}>
          <h4>Rejestracja</h4>

            <Form onSubmit={this.props.handleSubmit(this.submitForm.bind(this))}>
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

              <Button
                bsStyle="primary"
                type="submit"
                disabled={this.props.submitting}
                block>
                 Zarejestruj się.
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

export default reduxForm({form: 'registerForm'})(Register);
