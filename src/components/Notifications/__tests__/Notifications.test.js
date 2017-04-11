import React from 'react';
import ReactDOM from 'react-dom';
import { Notifications } from '../Notifications';
import renderer from 'react-test-renderer';
import LocalStorageMock from '../../../utils/localStorageMock';
global.localStorage = new LocalStorageMock;

describe('Notifications component', () => {

  it('matches the snapshot', () => {
    const currencies = [{
      code: 'ABC', name: 'awesome currency', country: 'country', table_type: 'A'
    }];
    const notifications = [];
    
    const component = renderer.create(
      <Notifications 
        currencies={currencies} 
        notifications={notifications} 
        loadNotifications={jest.fn()}
        addNotification={jest.fn()}
        updateNotification={jest.fn()}
        deleteNotification={jest.fn()}
        loadCurrencies={jest.fn()}
      />
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

});
