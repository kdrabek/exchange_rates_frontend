import React from 'react';
import ReactDOM from 'react-dom';
import { Notifications } from '../Notifications';
import renderer from 'react-test-renderer';
import { LocalStorageMock, removeUserInfo } from '../../../utils/localStorage';
global.localStorage = new LocalStorageMock;

describe('Notifications component', () => {

  beforeEach(()=>{
    removeUserInfo();
  });

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
