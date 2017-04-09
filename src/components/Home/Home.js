import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import moment from 'moment';

import * as ratesActions from '../../actions/ratesActions';
import { currencyCodePictures } from '../../utils/currencyCodes';
import RatesTable from '../RatesTable/RatesTable';
import HomeOptions from '../HomeOptions/HomeOptions';

class Home extends Component {

  componentDidMount() {
    this.props.dispatch(ratesActions.loadRates());
  }

  handleChange(date) {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    this.props.dispatch(ratesActions.loadRatesForDate(formattedDate));
  }

  prepareTableData(){
    if (!this.props.rates.rates) {
      return [['Downloading...']];
    } else {
      return this.props.rates.rates.map((rate, index) => {
        const linkTo = `/details/${rate.currency}`;
        return [
          <img src={currencyCodePictures[rate.currency]} alt={rate.currency}/>,
          rate.country,
          rate.name,
          rate.currency,
          rate.rate,
          <Link to={linkTo}>Zobacz więcej...</Link>
        ];
      });
    }
  }

  render() {
    const isAuthenticated = (
      localStorage.getItem('AuthUserToken') !== null &&
      localStorage.getItem('AuthUserEmail') !== null
    );
    return (
    <Row>
      <Col xs={3} md={3}>
        <HomeOptions 
          isAuthenticated={isAuthenticated}
          tableDate={this.props.rates.tableDate}
          handleChange={this.handleChange.bind(this)}
        />
      </Col>
      <Col xs={9} md={9}>
        <h3>Kursy walut ({this.props.rates.tableDate})</h3>
        <hr />
        <RatesTable 
          headers={[' ', 'Kraj', 'Waluta', 'Symbol', 'Kurs', ' ']} 
          data={this.prepareTableData()}
        />

      </Col>
    </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    rates: state.rates,
    tableDate: state.tableDate,
    user: state.user
  };
}

export default connect(mapStateToProps)(Home);
