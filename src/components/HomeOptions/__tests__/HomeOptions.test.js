import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import HomeOptions from '../HomeOptions';

describe('HomeOptions component', () => {

  it('matches the snapshot when user authenticated', () => {
    const component = renderer.create(
      <HomeOptions 
        isAuthenticated={true}
        tableDate={'2017-04-07'}
        handleChange={() => {}}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches the snapshot when user not authenticated', () => {
    const component = renderer.create(
      <HomeOptions 
        isAuthenticated={false}
        tableDate={'2017-04-07'}
        handleChange={() => {}}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});