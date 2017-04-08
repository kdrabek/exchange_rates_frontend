import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { FormGroup, ControlLabel, Button } from 'react-bootstrap';
import  DatePicker  from 'react-bootstrap-date-picker';

import { plDayLabels, plMonthLabels } from '../../utils/plLocale';

class HomeOptions extends Component {

  notificationsButton() {
    return (
      <Link to="/notifications">
        <Button bsStyle="primary" block>Przejdź do notyfikacji</Button>
      </Link>
    );
  }

  render() {
    return (
      <div>
        <h3>Opcje</h3>
        <hr />
        <FormGroup>
          <ControlLabel>Wybierz datę:</ControlLabel>
          <DatePicker
            id="example-datepicker"
            dateFormat="YYYY/MM/DD"
            weekStartsOnMonday
            dayLabels={plDayLabels}
            monthLabels={plMonthLabels}
            onChange={this.props.handleChange}
            value={this.props.tableDate}
          />
        </FormGroup>
        {this.props.isAuthenticated ? this.notificationsButton() : ''}
      </div>
    );
  }
}

HomeOptions.propTypes = {

};

export default HomeOptions;