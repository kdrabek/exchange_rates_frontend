import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button bsStyle="success">App component</Button>
        { this.props.children }
      </div>
    );
  }
}

export default App;
