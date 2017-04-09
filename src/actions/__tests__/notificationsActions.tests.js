import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as actions from '../notificationsActions';
import * as types from '../actionTypes';
import { BASE_API_URL } from '../../utils/api';

const mockStore = configureMockStore([ thunk ]);

describe('Notifications Actions', () => {
  
  afterEach(() => {
    nock.cleanAll()
  });

  it('dispatches NOTIFICATIONS_LOADED when fetching notifications is complete', () => {
    const store = mockStore({ notifications: [] })
    const apiResponse = {
      notifications: [{
        id: 1,
        currency: "ABC",
        rate: "1.22",
        threshold: "ABOVE",
        is_active: true
      }]
    };
      
    nock(BASE_API_URL).get('/notifications/token').reply(200, apiResponse);

    const expectedActions = [{
      type: types.NOTIFICATIONS_LOADED, 
      notifications: apiResponse.notifications, 
    }];

    return store.dispatch(actions.loadNotifications('token')).then(
      () => expect(store.getActions()).toEqual(expectedActions)
      );
    });

  it('dispatches NOTIFICATION_DELETED when fetching notifications is complete', () => {
    const store = mockStore({ notifications: [] })
    nock(BASE_API_URL).delete('/notifications/token').reply(204, {});

    const expectedActions = [{
      type: types.NOTIFICATION_DELETED, 
      notificationId: 1, 
    }];

    return store.dispatch(actions.deleteNotification('token', 1)).then(
      () => expect(store.getActions()).toEqual(expectedActions)
      );
    });

  it('dispatches NOTIFICATION_UPDATED when fetching notifications is complete', () => {
    const store = mockStore({ notifications: [] })
    const updatedNotification = {id: 8, is_active: true, currency: "AUD", threshold: "ABOVE", rate: "1.22"};
    const apiResponse = {
      notifications: [updatedNotification]
    };
      
    nock(BASE_API_URL).put('/notifications/token/8').reply(200, apiResponse);

    const expectedActions = [{
      type: types.NOTIFICATION_UPDATED, 
      notification: apiResponse, 
    }];

    return store.dispatch(actions.updateNotification('token', updatedNotification)).then(
      () => expect(store.getActions()).toEqual(expectedActions)
      );
    });

  it('dispatches NOTIFICATION_ADDED when fetching notifications is complete', () => {
    const store = mockStore({ notifications: [] })
    const newNotification = {is_active: true, code: "AUD", threshold: "ABOVE", rate: "1.22"};
    const apiResponse = {id: 8};
      
    nock(BASE_API_URL).post('/notifications/token').reply(200, apiResponse);

    const expectedActions = [{
      type: types.NOTIFICATION_ADDED, 
      notification: {id: apiResponse.id, ...newNotification} 
    }];
    return store.dispatch(actions.addNotification('token', newNotification)).then(
      () => expect(store.getActions()).toEqual(expectedActions)
      );
    });
  
})