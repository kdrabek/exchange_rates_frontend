import React, { Component } from 'react';
import { Link } from 'react-router';
import { 
  Col, Row, Button, Table, FormGroup, ControlLabel, FormControl 
} from 'react-bootstrap';

import Chart from '../Chart/Chart';
import * as ratesActions from '../../actions/actions';
import { connect } from 'react-redux';

import { currencyCodePictures } from '../../utils/currencyCodes';
import './Details.css';

class Details extends Component {
  
  componentDidMount(){
    const currencyCode = this.props.routeParams.currencyCode;
    const authToken = localStorage.getItem('AuthUserToken');
    this.props.dispatch(
      ratesActions.loadRatesForCurrency(authToken, currencyCode, 5)
    );
  }

  handleChange(e){
    const currencyCode = this.props.routeParams.currencyCode;
    const authToken = localStorage.getItem('AuthUserToken');
    this.props.dispatch(
      ratesActions.loadRatesForCurrency(
        authToken, currencyCode, parseInt(e.target.value)
      )
    );
  }
  render() {
    const currencyCode = this.props.routeParams.currencyCode;
    const increaseArrow = <span className="green">&#8599;</span>;
    const decreaseArrow = <span className="red">&#8600;</span>;
    let ratesTable = null;

    let data = [];

    if (this.props.ratesDetails) {
      ratesTable = this.props.ratesDetails.map((rate, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{rate.date}</td>
            <td>{rate.rate}</td>
            <td>{rate.relative_change}&nbsp;
              {parseFloat(rate.relative_change) > 0 ? increaseArrow : decreaseArrow}
            </td>
          </tr>
        );
      });

      data = this.props.ratesDetails.map(rate => {
        return { date: rate.date, rate: parseFloat(rate.rate) };
      });
    } else {
      ratesTable = <tr><td>Sciagam</td></tr>;
    }
    return (
      <Row>
        <Col xs={3} md={3}>
          <h4 className="subheader">Opcje</h4>
          <hr/>
          <FormGroup>
            <ControlLabel htmlFor="days-input">
              Ilość dni do uwzględnienia:
            </ControlLabel>
            <FormControl
              id="days-input"
              type="number"
              name="days"
              min="3"
              max="30"
              placeholder="5"
              onChange={this.handleChange.bind(this)}
            />
          </FormGroup>
          <Link to="notifications">
            <Button bsStyle="primary" block>Przejdź do notyfikacji</Button>
          </Link>
        </Col>
        <Col xs={9} md={9}>
          <h4>Widok szczegółowy</h4>
          <hr/>
          <h4 className="capitalize">
            <img src={currencyCodePictures[currencyCode]} />
             &nbsp;{ this.props.ratesDetails ? this.props.ratesDetails[0].name : ''}
             </h4>
          <Chart data={data.reverse()}/>
          <hr />
          <Table striped hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Data</th>
                <th>Kurs</th>
                <th>Zmiana</th>
              </tr>
            </thead>
            <tbody>
            {ratesTable}
            </tbody>
          </Table>
        </Col>
      </Row> 
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log('mapStateToProps', state);
  return {
    ratesDetails: state.ratesDetails.rates
  };
}

export default connect(mapStateToProps)(Details);
