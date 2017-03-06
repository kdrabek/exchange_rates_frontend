import React, { Component } from 'react';
import { Row, Col, Table, FormControl, Button } from 'react-bootstrap';
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
            <Switch value={notification.is_active} />
          </td>
          <td>
            <Button bsStyle="warning">Usuń</Button>
          </td>
        </tr>
      );
    });
    return (
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

          <tr>
            <td>
              <FormControl componentClass="select" placeholder="select">
                <option value="select" selected>AUD</option>
              </FormControl>
            </td>
            <td>
              <FormControl type="number" step="0.01" min="0" value="0.00" />
            </td>
            <td>
              <FormControl componentClass="select" placeholder="select">
                <option value="select" selected>powyżej</option>
              </FormControl>
            </td>
            <td>
              <Switch />
            </td>
            <td>
              <Button bsStyle="success">Dodaj</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }
  
  render() {
    const notificationsTable = this.props.notifications ? this.displayNotifications() : 'Sciagam...';
    return (
      <Row>
        <Col md={3}>
          <h4>Jak to działa?</h4>
          <hr/>
          <ul>
            <li><p>Notifikacje wysyłane są <em>raz dziennie</em>, po ściągnięciu aktualnych kursów walut.</p></li>
            <li><p>Notyfikacja zostanie wysłana tylko wtedy, jeśli wybrany warunek jest spełniony (kurs powyżej lub poniżej progu).</p></li>
            <li><p>Tylko <em>aktywne</em> notyfikacje będą wysyłane.</p></li>
          </ul>
        </Col>
        <Col md={9}>
          <h4>Moje notyfikacje</h4>
          <hr/>
          {notificationsTable}
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    notifications: state.notifications.notifications
  };
}

export default connect(mapStateToProps)(Notifications);
