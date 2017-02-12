import React from 'react';
import { Link } from 'react-router';
import { Column, Colors, Row, Link as ButtonLink } from 'react-foundation';

import Chart from './Chart';

class Details extends React.Component {
  render() {
    return (
      <Row>
        <Column large={3}>
          <h4 className="subheader">Opcje</h4>
          <hr/>
          <div>
            Ilość dni do uzględnienia:
            <input type="number" name="bday" min="1" max="30" value="5" />
          </div>
          <Link to="notifications">
            <ButtonLink color={Colors.PRIMARY}>Przejdź do notyfikacji</ButtonLink>
          </Link>
        </Column>
        <Column large={9}>
          <h4 className="subheader">Widok szczegółowy</h4>
          <hr/>
          <h5 className="subheader"><img src="../../public/img/AUD.png" /> Dolar australijski (AUD):</h5>
          <Chart />
          <hr />
          <table className="unstriped hover large-5 larget-offset-2">
            <thead>
              <tr>
                <th width="200">Data:</th>
                <th width="150">Kurs:</th>
                <th width="150">Zmiana:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>06/01/2017</td>
                <td>2.92</td>
                <td>-0.08</td>
              </tr>
              <tr>
                <td>05/01/2017</td>
                <td>3.00</td>
                <td>-0.12</td>
              </tr>
              <tr>
                <td>04/01/2017</td>
                <td>3.12</td>
                <td>+0.68</td>
              </tr>
              <tr>
                <td>03/01/2017</td>
                <td>2.44</td>
                <td>-0.24</td>
              </tr>
              <tr>
                <td>02/01/2017</td>
                <td>2.68</td>
                <td>+0.33</td>
              </tr>
              <tr>
                <td>01/01/2017</td>
                <td>2.35</td>
                <td>--</td>
              </tr>
            </tbody>
          </table>
        </Column>
      </Row>
    );
  }
}

export default Details;
