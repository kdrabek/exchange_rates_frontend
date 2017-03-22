import React, { Component } from 'react';
import { Row, Col, Table, FormControl, Button, FormGroup, ControlLabel, Form } from 'react-bootstrap';
import Switch from 'react-bootstrap-switch';
import { connect } from 'react-redux';

import * as ratesActions from '../../actions/actions';

const thresholdConditionMap = {
  'ABOVE': 'powyżej', 'BELOW': 'poniżej'
};

class Notifications extends Component {
  
  componentDidMount() {
    const authToken = localStorage.getItem('AuthUserToken');
    this.props.dispatch(ratesActions.loadNotifications(authToken));
    this.props.dispatch(ratesActions.loadCurrencies(authToken));
  }
  
  deleteNotification(notificationId) {
    const authToken = localStorage.getItem('AuthUserToken');
    this.props.dispatch(ratesActions.deleteNotification(authToken, notificationId));    
  }

  changeNotificationState(notification){
    const authToken = localStorage.getItem('AuthUserToken');
    notification.is_active = !notification.is_active;
    this.props.dispatch(ratesActions.updateNotification(authToken, notification));
  }

  displayNotifications(){
    let notificationsTable = this.props.notifications.map((notification, index) => {
      
      return (
        <tr key={index}>
          <td>
            <FormControl componentClass="select" placeholder="select" disabled>
              <option value="select" selected>{notification.currency}</option>
            </FormControl>
          </td>
          <td>
            <FormControl type="number" step="0.01" min="0" value={notification.rate} disabled />
          </td>
          <td>
            <FormControl componentClass="select" placeholder="select" disabled>
              <option value="select" selected>{thresholdConditionMap[notification.threshold]}</option>
            </FormControl>
          </td>
          <td>
            <Switch
              value={notification.is_active}
              onColor="success"
              offColor="warning"
              onChange={this.changeNotificationState.bind(this, notification)}
            />
          </td>
          <td>
            <Button 
              bsStyle="warning"
              onClick={this.deleteNotification.bind(this, notification.id)}
            >Usuń</Button>
          </td>
        </tr>
      );
    });
    return notificationsTable;
  }

  submitForm(e){
    e.preventDefault();
    const authToken = localStorage.getItem('AuthUserToken');
    const newNotification = {
      code: e.target.currency.value,
      rate: parseFloat(e.target.rate.value),
      threshold: e.target.threshold.value,
      is_active: true
    };
    console.log(newNotification);
    this.props.dispatch(ratesActions.addNotification(authToken, newNotification));
  }

  displayAddNotificationForm() {
    console.log('this.props.currencies', this.props.currencies);
    const currencySelect = this.props.currencies.length ? this.props.currencies.map(currency => {
      return <option
        value={currency.code}>{currency.code} ({currency.country})</option>
      }
    ) : <option></option>;
    return (
      <Form onSubmit={this.submitForm.bind(this)}>
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
          <Button type="submit" bsStyle="success" >Dodaj</Button>
        </FormGroup>
      </Form>
    )
  }
  
  render() {
    const notificationsTable = this.props.notifications ? this.displayNotifications() : 'Sciagam...';
    const notificationsForm = this.displayAddNotificationForm();
    return (
      <div>
        <Row>
          <Col md={3}>
            <h4>Jak to działa?</h4>
            <hr/>
            <ul>
              <li><p>Notyfikacja zostanie wysłana tylko wtedy, jeśli wybrany warunek jest spełniony (kurs powyżej lub poniżej progu).</p></li>
              <li><p>Tylko <em>aktywne</em> notyfikacje będą wysyłane.</p></li>
            </ul>
          </Col>
          <Col md={9}>
            <h4>Moje notyfikacje</h4>
            <hr/>
            <Table striped hover>
              <thead>
                <tr>
                  <th>Waluta</th>
                  <th>Próg</th>
                  <th>Warunek</th>
                  <th>Aktywna</th>
                </tr>
              </thead>
              <tbody>
                {notificationsTable}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col md={4} mdOffset={3}>
            <h4>Dodaj nową notyfikację</h4>
            {notificationsForm}
          </Col>
        </Row>
      </div>  
    );
    
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state.currencies);
  return {
    notifications: state.notifications.notifications,
    currencies: state.currencies
  };
}

export default connect(mapStateToProps)(Notifications);
