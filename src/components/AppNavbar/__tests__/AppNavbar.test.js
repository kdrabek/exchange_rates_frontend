import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { LocalStorageMock, setUserInfo, removeUserInfo } from '../../../utils/localStorage';
global.localStorage = new LocalStorageMock;

import { AppNavbar } from '../AppNavbar';

describe('AppNavbar component', () => {

  beforeEach(()=>{
    removeUserInfo();
  });

  it('matches the snapshot when user not authenticated', () => {
    const tree = renderer.create(<AppNavbar />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('matches the snapshot when user authenticated', () => {
    setUserInfo('token', 'email@user.com');
    const tree = renderer.create(<AppNavbar />).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
