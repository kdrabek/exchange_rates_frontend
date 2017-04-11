import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import DetailsOptions from '../DetailsOptions';

describe('DetailsOptions component', () => {

  it('matches the snapshot', () => {
    const component = renderer.create(
      <DetailsOptions handleChange={() => {}} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});