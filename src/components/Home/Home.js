import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, Table, Button } from 'react-bootstrap';
import  DatePicker  from 'react-bootstrap-date-picker';
import { connect } from 'react-redux';
import moment from 'moment';

import * as ratesActions from '../../actions/actions';
import { currencyCodePictures } from '../../utils/currencyCodes';
import { plDayLabels, plMonthLabels } from '../../utils/plLocale';
import RatesTable from '../RatesTable/RatesTable';

class Home extends Component {

  componentDidMount() {
    this.props.dispatch(ratesActions.loadRates());
  }

  handleChange(date) {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    this.props.dispatch(ratesActions.loadRatesForDate(formattedDate));
  }

  notificationsButton() {
    return (
      <Link to="/notifications">
        <Button bsStyle="primary" block>Przejdź do notyfikacji</Button>
      </Link>
    );
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
    const notificationBtn = isAuthenticated ? this.notificationsButton() : '';
    return (
    <Row>
      <Col xs={3} md={3}>
        <h3 className="force-text-left">Opcje</h3>
        <hr />
        <FormGroup>
          <ControlLabel>Wybierz datę: </ControlLabel>
          <DatePicker
            id="example-datepicker"
            dateFormat="YYYY/MM/DD"
            weekStartsOnMonday
            dayLabels={plDayLabels}
            monthLabels={plMonthLabels}
            onChange={this.handleChange.bind(this)}
            value={this.props.rates.tableDate}
          />
        </FormGroup>
        {notificationBtn}
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
