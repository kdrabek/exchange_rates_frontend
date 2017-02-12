import React from 'react';
import { Column, Row, Switch } from 'react-foundation';

class Notifications extends React.Component {
  render() {
    return (
      <Row>
        <Column large={3}>
          <h4 classNameName="subheader">Jak to działa?</h4>
          <hr/>
          <ul>
            <li><p>Notifikacje wysyłane są <em>raz dziennie</em>, po ściągnięciu aktualnych kursów walut.</p></li>
            <li><p>Notyfikacja zostanie wysłana tylko wtedy, jeśli wybrany warunek jest spełniony (kurs powyżej lub poniżej progu).</p></li>
            <li><p>Tylko <em>aktywne</em> notyfikacje będą wysyłane.</p></li>
          </ul>
        </Column>
        <Column large={9}>
          <h4 className="subheader">Moje notyfikacje</h4>
          <hr/>
          <table className="unstriped hover">
            <thead>
              <tr>
                <th width="300">Waluta</th>
                <th width="150">Próg</th>
                <th width="150">Warunek</th>
                <th width="150">Aktywna?</th>
                <th width="150"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select disabled>
                    <option value="husker" selected>AUD</option>
                    <option value="starbuck">Starbuck</option>
                    <option value="hotdog">Hot Dog</option>
                    <option value="apollo">Apollo</option>
                  </select>
                </td>
                <td>
                  <input type="number" step="0.01" min="0" value="2.35" disabled />
                </td>
                <td>
                  <select disabled>
                    <option value="husker" selected>powyżej</option>
                    <option value="starbuck">poniżej</option>
                  </select>
                </td>
                <td>
                  <Switch />
                </td>
                <td>
                  <button type="button" className="warning button">Usuń</button>
                </td>
              </tr>

              <tr>
                <td>
                  <select disabled>
                    <option value="husker" selected>USD</option>
                    <option value="starbuck">Starbuck</option>
                    <option value="hotdog">Hot Dog</option>
                    <option value="apollo">Apollo</option>
                  </select>
                </td>
                <td>
                  <input type="number" step="0.01" min="0" value="3.56" disabled />
                </td>
                <td>
                  <select disabled>
                    <option value="husker">powyżej</option>
                    <option value="starbuck" selected>poniżej</option>
                  </select>
                </td>
                <td>
                  <Switch />
                </td>
                <td>
                  <button type="button" className="warning button">Usuń</button>
                </td>
              </tr>

              <tr>
                <td>
                  <select>
                    <option value="husker" selected></option>
                    <option value="starbuck">AUD</option>
                    <option value="hotdog">CHF</option>
                    <option value="apollo">HUF</option>
                  </select>
                </td>
                <td>
                  <input type="number" step="0.01" min="0" value="0.00" />
                </td>
                <td>
                  <select>
                    <option value="husker">powyżej</option>
                    <option value="starbuck">poniżej</option>
                  </select>
                </td>
                <td>

                </td>
                <td>
                  <button type="button" className="success button">Dodaj</button>
                </td>
              </tr>
            </tbody>
          </table>

        </Column>
      </Row>
    );
  }
}

export default Notifications;
