import React from 'react';
import renderer from 'react-test-renderer';
import { reduxForm } from 'redux-form';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Login } from '../Login';


describe('Login component', () => {

  it('matches the snapshot', () => {
    const DecoratedLogin = reduxForm({ form: 'testForm' })(Login);
    const store = createStore(() => ({}));

    const tree = renderer.create(
      <Provider store={store}>
        <DecoratedLogin loginUser={jest.fn()} />
      </Provider>
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

});