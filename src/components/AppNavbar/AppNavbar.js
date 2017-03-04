import React from 'react';
import { Button, Navbar, Nav, NavItem, Row, Col } from 'react-bootstrap';

class AppNavbar extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fluid>
        <Row>
          <Col Col md={8} mdPush={2}>
            <Navbar.Header>
              <Navbar.Brand>Exchange Rates</Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  <Button bsStyle="success">Zaloguj się</Button>
                </NavItem>
                <NavItem eventKey={2} href="#">
                  <Button bsStyle="warning">Zarejestruj się</Button>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Navbar>
    );
  }
}

export default AppNavbar;
