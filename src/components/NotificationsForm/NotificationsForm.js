import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl, Button, FormGroup, ControlLabel, Form } from 'react-bootstrap';

class NotificationsForm extends Component {
  render() {
    const currencySelect = this.props.currencies.length ? this.props.currencies.map(currency => {
      return <option key={currency.code} value={currency.code}>{currency.code} ({currency.country})</option>
      }
    ) : <option></option>;
    return (
      <div>
        <Form onSubmit={this.props.submitForm}>
          <FormGroup>
            <ControlLabel>Waluta</ControlLabel>
            <FormControl componentClass="select" placeholder="select" name="currency">
              {currencySelect}
            </FormControl>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Próg</ControlLabel>
            <FormControl type="number" step="0.01" min="0" placeholder="0.00" name="rate" required/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Warunek</ControlLabel>
            <FormControl componentClass="select" placeholder="select" name="threshold">
              <option value="ABOVE" selected>powyżej</option>
              <option value="BELOW">poniżej</option>
            </FormControl>
          </FormGroup>

          <FormGroup>
            <Button type="submit" bsStyle="success">Dodaj</Button>
          </FormGroup>
        </Form>       
      </div>
    );
  }
}

NotificationsForm.propTypes = {
  currencies: PropTypes.array,
  submitForm: PropTypes.func,
}

export default NotificationsForm;