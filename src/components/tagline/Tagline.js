import React from 'react';

import { Row, Column } from 'react-foundation';

class Tagline extends React.Component {
  render() {
    return (
      <Row>
        <Column large={12}>
          <h2>Kursy walut NBP</h2>
          <h4 className="subheader">Według tabeli A</h4>
        </Column>
      </Row>
    );
  }
}

export default Tagline;
