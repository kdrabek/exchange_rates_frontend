import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { 
  Col, Row, Button, Table, FormGroup, ControlLabel, FormControl 
} from 'react-bootstrap';

import Chart from '../Chart/Chart';
import * as ratesActions from '../../actions/actions';
import { currencyCodePictures } from '../../utils/currencyCodes';
import './Details.css';
import RatesTable from '../RatesTable/RatesTable';

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

  prepareTableData(){
    const increaseArrow = <span className="green">&#8599;</span>;
    const decreaseArrow = <span className="red">&#8600;</span>;

    if (!this.props.ratesDetails) {
      return [['Downloading...']];
    } else {
      return this.props.ratesDetails.map((rate, index) => {
        return [
          index + 1,
          rate.date,
          rate.rate,
          rate.relative_change,
          parseFloat(rate.relative_change) > 0 ? increaseArrow : decreaseArrow,
        ];
      });
    }
  }

  prepareChartData() {
    const ratesDetails = this.props.ratesDetails;
    return !ratesDetails ? [] : ratesDetails.map(
      rate => { 
        return { date: rate.date, rate: parseFloat(rate.rate) };
      });
  }

  render() {
    const currencyCode = this.props.routeParams.currencyCode;
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
          <Link to="/notifications">
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
          <Chart data={this.prepareChartData().reverse()}/>
          <hr />
          <RatesTable 
            headers={['#', 'Data', 'Kurs', 'Zmiana', ' ']} 
            data={this.prepareTableData()}
          />
        </Col>
      </Row> 
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ratesDetails: state.ratesDetails.rates
  };
}

export default connect(mapStateToProps)(Details);
