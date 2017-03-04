import React from 'react';
import { Row, Col, PageHeader } from 'react-bootstrap';

import './Tagline.css';

class Tagline extends React.Component {
  render() {
    return (
    <Row>
      <Col xs={12} md={12}>
        <PageHeader>
          Kursy walut NBP <small>Według tabeli A</small>
        </PageHeader>
      </Col>
    </Row>
    );
  }
}

export default Tagline;
