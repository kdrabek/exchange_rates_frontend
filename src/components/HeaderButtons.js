import React from 'react';

import {
  ButtonGroup,
  Colors,
  Link as ButtonLink,
  TopBarRight
} from 'react-foundation';
import { Link } from 'react-router';

class HeaderButtons extends React.Component {
  render() {
    return (
      <TopBarRight className="dark">
        <ButtonGroup>
          <Link to="login">
            <ButtonLink color={Colors.SUCCESS}>Zaloguj się</ButtonLink>
          </Link>
          <Link to="register">
            <ButtonLink color={Colors.WARNING}>Zarejestruj się</ButtonLink>
          </Link>
        </ButtonGroup>
      </TopBarRight>
    );
  }
}

export default HeaderButtons;
