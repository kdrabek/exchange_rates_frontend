import React from 'react';

import { Row } from 'react-foundation';

import Header from './Header';
import Tagline from './Tagline';
import Sidebar from './Sidebar';
import Content from './Content';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Tagline/>
        <Row>
          <Sidebar header="Opcje"/>
          <Content header="Kursy na dzień 2017-02-12"/>
        </Row>
      </div>
    );
  }
}

export default App;
