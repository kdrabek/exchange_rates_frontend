import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import AppNavbar from '../AppNavbar/AppNavbar';
import Tagline from '../Tagline/Tagline';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Grid>
          <Tagline />
          { this.props.children }
        </Grid>
      </div>
    );
  }
}

export default App;
