import React from 'react';
import { Link } from 'react-router';

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
              <Link to="/">
                <span className="app-name">Exchange Rates</span>
              </Link>
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
