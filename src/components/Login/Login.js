import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Login extends Component {
  render() {
    return (
      <div>
        Hi from Login component!
        <Button bsStyle="success">Login component</Button>
      </div>
    );
  }
}

export default Login;
