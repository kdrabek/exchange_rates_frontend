import React from 'react';
import ReactDOM from 'react-dom';
import Tagline from './Tagline';
import renderer from 'react-test-renderer';

describe('Tagline component', () => {

  it('matches the snapshot', () => {
    const component = renderer.create(
      <Tagline />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});