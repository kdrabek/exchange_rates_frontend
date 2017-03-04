import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Details extends Component {
  render() {
    return (
      <div>
        Hi from details component!
        <Button bsStyle="success">Details component</Button>
      </div>
    );
  }
}

export default Details;
