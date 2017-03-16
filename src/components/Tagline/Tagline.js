import React from 'react';
import { Row, Col, PageHeader } from 'react-bootstrap';

const Tagline = (props) => {
  return (
    <Row>
      <Col xs={12} md={12}>
        <PageHeader>
          Kursy walut NBP <br /><small>Według tabeli A</small>
        </PageHeader>
      </Col>
    </Row>
  );
};

export default Tagline;
