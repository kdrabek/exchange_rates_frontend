import React from 'react';

import { Column } from 'react-foundation';

class Sidebar extends React.Component {
  render() {
    return (
      <Column large={3}>
        <h4 className="subheader">{ this.props.header }</h4>
        <hr/>
      </Column>
    );
  }
}

export default Sidebar;
