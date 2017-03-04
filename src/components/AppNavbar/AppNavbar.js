import React from 'react';
import { Link } from 'react-router';
import { Button, Navbar, Nav, NavItem, Row, Col } from 'react-bootstrap';

class AppNavbar extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fluid>
        <Row>
          <Col Col md={8} mdPush={2}>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">
                   Exchange Rates
                </Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem>
                  <Link to="login">
                    <Button bsStyle="success">Zaloguj się</Button>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="register">
                    <Button bsStyle="warning">Zarejestruj się</Button>
                  </Link>
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
