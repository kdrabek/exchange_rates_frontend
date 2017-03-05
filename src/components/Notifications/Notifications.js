import React, { Component } from 'react';
import { Row, Col, Table, FormControl, Button } from 'react-bootstrap';
import Switch from 'react-bootstrap-switch';

class Notifications extends Component {
  render() {
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
              <tr>
                <td>
                  <FormControl componentClass="select" placeholder="select" disabled>
                    <option value="select" selected>AUD</option>
                  </FormControl>
                </td>
                <td>
                  <FormControl type="number" step="0.01" min="0" value="2.35" disabled />
                </td>
                <td>
                  <FormControl componentClass="select" placeholder="select" disabled>
                    <option value="select" selected>powyżej</option>
                  </FormControl>
                </td>
                <td>
                  <Switch />
                </td>
                <td>
                  <Button bsStyle="warning">Usuń</Button>
                </td>
              </tr>

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
        </Col>
      </Row>
    );
  }
}

export default Notifications;
