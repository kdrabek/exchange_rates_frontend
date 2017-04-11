import React from 'react';
import renderer from 'react-test-renderer';
import { reduxForm } from 'redux-form';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Register } from '../Register';


describe('Register component', () => {

  it('matches the snapshot', () => {
    const DecoratedRegister = reduxForm({ form: 'testForm' })(Register);
    const store = createStore(() => ({}));

    const tree = renderer.create(
      <Provider store={store}>
        <DecoratedRegister registerUser={jest.fn()} />
      </Provider>
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

});
