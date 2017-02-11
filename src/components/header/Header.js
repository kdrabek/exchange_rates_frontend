import React from 'react';

import { TopBar, TopBarTitle } from 'react-foundation';
import { Row, Column } from 'react-foundation';

import HeaderButtons from './HeaderButtons';

class Header extends React.Component {
  render() {
    return (
      <TopBar className="dark">
        <Row>
          <Column large={7}>
            <TopBarTitle>
              <span className="app-name">Exchange Rates</span>
            </TopBarTitle>
          </Column>
          <Column large={5}>
            <HeaderButtons />
          </Column>
        </Row>
      </TopBar>
    );
  }
}

export default Header;
