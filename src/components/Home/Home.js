import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div>
        Hi from Home component!
        <Button bsStyle="success">Home component</Button>
      </div>
    );
  }
}

export default Home;
