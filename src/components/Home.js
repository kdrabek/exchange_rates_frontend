import React from 'react';
import { Link } from 'react-router';
import { Column, Colors, Row, Link as ButtonLink } from 'react-foundation';

class Home extends React.Component {
  render() {
    return (
      <Row>
        <Column large={3}>
          <h4 className="subheader">Opcje</h4>
          <hr/>
          <p>
            Wybierz datę:
            <input type="date" name="bday" min="2016-12-01" value="2016-02-08" />
          </p>
          <Link to="notifications">
            <ButtonLink color={Colors.PRIMARY}>Przejdź do notyfikacji</ButtonLink>
          </Link>
        </Column>
        <Column large={9}>
          <h4 className="subheader">Akutalne kursy walut</h4>
          <hr/>
          <table class="unstriped hover">
            <thead>
              <tr>
                <th width="200">Kraj</th>
                <th>Waluta</th>
                <th width="150">Symbol</th>
                <th width="150">Kurs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="../../public/img/AUD.png" /> Australia</td>
                <td>Dolar australijski</td>
                <td>AUD</td>
                <td>4.5678</td>
              </tr>
              <tr>
                <td><img src="../../public/img/AUD.png" /> Australia</td>
                <td>Dolar australijski</td>
                <td>AUD</td>
                <td>4.5678</td>
              </tr>
              <tr>
                <td><img src="../../public/img/AUD.png" /> Australia</td>
                <td>Dolar australijski</td>
                <td>AUD</td>
                <td>4.5678</td>
              </tr>
            </tbody>
          </table>

        </Column>
      </Row>
    );
  }
}

export default Home;
