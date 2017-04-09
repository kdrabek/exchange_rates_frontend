import React from 'react';
import { Link } from 'react-router';
import { Button, Navbar, Nav, NavItem, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';

export class AppNavbar extends React.Component {

  handleLogout(){
    this.props.dispatch(userActions.logoutUser())
  }

  unauthenticatedMenu(){
    return (
      <Nav pullRight>
        <NavItem>
          <Link to="/login">
            <Button bsStyle="success">Zaloguj się</Button>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/register">
            <Button bsStyle="warning">Zarejestruj się</Button>
          </Link>
        </NavItem>
      </Nav>
      );
  }

  authenticatedMenu(){
    return (
      <Nav pullRight>
        <NavItem>
          Witaj, <strong>{localStorage.getItem('AuthUserEmail')}</strong>
        </NavItem>
        <NavItem>
          <Button bsStyle="danger" onClick={this.handleLogout.bind(this)}>Wyloguj się</Button>
        </NavItem>
      </Nav>
      );
  }

  render() {
    const isAuthenticated = (
      localStorage.getItem('AuthUserToken') && localStorage.getItem('AuthUserEmail')
    );
    const navButtons = isAuthenticated ? this.authenticatedMenu() : this.unauthenticatedMenu();
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
              {navButtons}
            </Navbar.Collapse>
          </Col>
        </Row>
      </Navbar>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    apiError: state.user.apiError,
    user: state.user.user
  };
}

export default connect(mapStateToProps)(AppNavbar);
