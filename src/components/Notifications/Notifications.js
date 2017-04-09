import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Switch from 'react-bootstrap-switch';
import { Row, Col, Table, FormControl, Button } from 'react-bootstrap';


import NotificationsForm from '../NotificationsForm/NotificationsForm';
import * as notificationsActions from '../../actions/notificationsActions';
import * as currenciesActions from '../../actions/currenciesActions';

const thresholdConditionMap = {
  'ABOVE': 'powyżej', 'BELOW': 'poniżej'
};

class Notifications extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }
  
  componentDidMount() {
    const authToken = localStorage.getItem('AuthUserToken');
    this.props.loadNotifications(authToken);
    this.props.loadCurrencies(authToken);
  }
  
  deleteNotification(notificationId) {
    const authToken = localStorage.getItem('AuthUserToken');
    this.props.deleteNotification(authToken, notificationId);    
  }

  changeNotificationState(notification){
    const authToken = localStorage.getItem('AuthUserToken');
    notification.is_active = !notification.is_active;
    this.props.updateNotification(authToken, notification);
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
    this.props.addNotification(authToken, newNotification);
  }
  
  render() {
    const notificationsTable = this.props.notifications ? this.displayNotifications() : 'Sciagam...';
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
            <NotificationsForm currencies={this.props.currencies} submitForm={this.submitForm} />
          </Col>
        </Row>
      </div>  
    );
    
  }
}

Notifications.propTypes = {
  notifications: PropTypes.array,
  currencies: PropTypes.array,
  loadNotifications: PropTypes.func,
  addNotification: PropTypes.func,
  updateNotification: PropTypes.func,
  deleteNotification: PropTypes.func,
  loadCurrencies: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => {
  return {
    notifications: state.notifications,
    currencies: state.currencies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadNotifications: (token) => dispatch(notificationsActions.loadNotifications(token)),
    addNotification: (token, notification) => dispatch(notificationsActions.addNotification(token, notification)),
    updateNotification: (token, notification) => dispatch(notificationsActions.updateNotification(token, notification)),
    deleteNotification: (token, id) => dispatch(notificationsActions.deleteNotification(token, id)),
    loadCurrencies: (token) => dispatch(currenciesActions.loadCurrencies(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
