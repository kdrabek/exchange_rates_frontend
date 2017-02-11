import React from 'react';

import { Row, Column } from 'react-foundation';

import Header from '../header/Header';
import Tagline from '../tagline/Tagline';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Tagline />
        <Row className="display">
          <Column small={2} large={4}>4 columns</Column>
          <Column small={4} large={4}>4 columns</Column>
          <Column small={6} large={4}>4 columns</Column>
        </Row>
      </div>
    );
  }
}

export default App;
