import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';

import RatesTable from '../RatesTable/RatesTable';
import HomeOptions from '../HomeOptions/HomeOptions';
import * as ratesActions from '../../actions/ratesActions';
import { currencyCodePictures } from '../../utils/currencyCodes';

class Home extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.loadRates();
  }

  handleChange(date) {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    this.props.loadRatesForDate(formattedDate);
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
          handleChange={this.handleChange}
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

Home.propTypes = {
  rates: PropTypes.object,
  tableDate: PropTypes.string,
  user: PropTypes.object,
  loadRates: PropTypes.func,
  loadRatesForDate: PropTypes.func
}

const mapStateToProps = (state, ownProps) => {
  return {
    rates: state.rates,
    tableDate: state.tableDate,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadRates: () => dispatch(ratesActions.loadRates()),
    loadRatesForDate: (date) => dispatch(ratesActions.loadRatesForDate(date))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
