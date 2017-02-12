import React from 'react';

import { Column } from 'react-foundation';

class Content extends React.Component {
  render() {
    return (
      <Column large={9}>
        <h4 className="subheader">{ this.props.header }</h4>
        <hr />
      </Column>
    );
  }
}

export default Content;
