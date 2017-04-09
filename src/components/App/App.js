import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';

import AppNavbar from '../AppNavbar/AppNavbar';
import Tagline from '../Tagline/Tagline';

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

App.propTypes = {
  children: PropTypes.object
}

export default App;
