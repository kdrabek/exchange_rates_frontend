import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Notifications extends Component {
  render() {
    return (
      <div>
        Hi from Notifications component!
        <Button bsStyle="success">Notifications component</Button>
      </div>
    );
  }
}

export default Notifications;
