import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import LocalStorageMock from '../../../utils/localStorageMock';
global.localStorage = new LocalStorageMock;

import { AppNavbar } from '../AppNavbar';

describe('AppNavbar component', () => {

  it('matches the snapshot when user not authenticated', () => {
    const tree = renderer.create(<AppNavbar />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('matches the snapshot when user authenticated', () => {
    localStorage.setItem('AuthUserToken', 'token');
    localStorage.setItem('AuthUserEmail', 'email@user.com');
    const tree = renderer.create(<AppNavbar />).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
