import React from 'react';

import {
  ButtonGroup,
  Colors,
  Link,
  TopBarRight
} from 'react-foundation';

class HeaderButtons extends React.Component {
  render() {
    return (
      <TopBarRight className="dark">
        <ButtonGroup>
          <Link color={Colors.SUCCESS}>Zaloguj się</Link>
          <Link color={Colors.WARNING}>Zarejestruj się</Link>
        </ButtonGroup>
      </TopBarRight>
    );
  }
}

export default HeaderButtons;
