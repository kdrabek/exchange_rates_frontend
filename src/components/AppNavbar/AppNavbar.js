import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Button, Navbar, Nav, NavItem, Row, Col } from 'react-bootstrap';

import * as userActions from '../../actions/userActions';

export class AppNavbar extends React.Component {

  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    this.props.logoutUser();
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
          <Button bsStyle="danger" onClick={this.handleLogout}>Wyloguj się</Button>
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

AppNavbar.propTypes = {
  logoutUser: PropTypes.func,
  user: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(userActions.logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavbar);
