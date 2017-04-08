import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import  DatePicker  from 'react-bootstrap-date-picker';

class DetailsOptions extends Component {

  render() {
    return (
      <div>
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
              onChange={this.props.handleChange}
          />
        </FormGroup>
        <Link to="/notifications">
          <Button bsStyle="primary" block>Przejdź do notyfikacji</Button>
        </Link>
      </div>
    );
  }
}

DetailsOptions.propTypes = {

};

export default DetailsOptions;