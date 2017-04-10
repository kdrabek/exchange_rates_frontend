import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Switch from 'react-bootstrap-switch';
import { Row, Col, FormControl, Button } from 'react-bootstrap';


import NotificationsForm from '../NotificationsForm/NotificationsForm';
import RatesTable from '../RatesTable/RatesTable';
import * as notificationsActions from '../../actions/notificationsActions';
import * as currenciesActions from '../../actions/currenciesActions';
import { plThresholdConditionMap } from '../../utils/plLocale';

class Notifications extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.changeNotificationState = this.changeNotificationState.bind(this);
    this.deleteNotification = this.deleteNotification.bind(this);
    this.token = localStorage.getItem('AuthUserToken')
  }
  
  componentDidMount() {
    this.props.loadNotifications(this.token);
    this.props.loadCurrencies(this.token);
  }
  
  deleteNotification(notificationId) {
    this.props.deleteNotification(this.token, notificationId);    
  }

  changeNotificationState(notification){
    notification.is_active = !notification.is_active;
    this.props.updateNotification(this.token, notification);
  }

  submitForm(e){
    e.preventDefault();
    const newNotification = {
      code: e.target.currency.value, rate: parseFloat(e.target.rate.value),
      threshold: e.target.threshold.value, is_active: true
    };
    this.props.addNotification(this.token, newNotification);
  }

  prepareTableData(){
    if (!this.props.notifications) {
      return [['Downloading...']];
    } else {
      return this.props.notifications.map((notification) => {
        return [
          <FormControl componentClass="select" placeholder="select" disabled>
            <option value="select" selected>
              {notification.currency}
            </option>
          </FormControl>,
  
          <FormControl 
            type="number" 
            step="0.01" 
            min="0" 
            value={notification.rate} 
            disabled 
          />,

          <FormControl componentClass="select" placeholder="select" disabled>
            <option value="select" selected>
              {plThresholdConditionMap[notification.threshold]}
            </option>
          </FormControl>,

          <Switch
            value={notification.is_active}
            onColor="success"
            offColor="warning"
            onChange={this.changeNotificationState.bind(this, notification)}
          />,

          <Button 
            bsStyle="warning"
            onClick={this.deleteNotification.bind(this, notification.id)}
          >Usuń</Button>
        ];
      });
    }
  }
  
  render() {
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
            <RatesTable 
              headers={['Waluta', 'Próg', 'Warunek', 'Aktywna']}
              data={this.prepareTableData()} 
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} mdOffset={3}>
            <h4>Dodaj nową notyfikację</h4>
            <NotificationsForm 
              currencies={this.props.currencies} 
              submitForm={this.submitForm} 
            />
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
