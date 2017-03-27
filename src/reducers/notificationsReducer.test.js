import { notifications as reducer } from './notificationsReducer';
import * as actionTypes from '../actions/actionTypes';

describe('notifications reducer', () => {

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle NOTIFICATIONS_LOADED action', () => {
    const action = {
      type: actionTypes.NOTIFICATIONS_LOADED, 
      notifications: [
        {name: 'some_notification'}
      ]
    };

    expect(reducer([], action)).toEqual(action.notifications);
  });

  it('should handle NOTIFICATION_ADDED action', () => {
    const action = {
      type: actionTypes.NOTIFICATION_ADDED, 
      notification: {
        id: 1, code: 'XXX'
      }
    };

    const expectedState = [{
      code: "XXX", currency: "XXX", id: 1
    }]

    expect(reducer([], action)).toEqual(expectedState);    
  });

  it('should handle NOTIFICATION_DELETED action', () => {
    const currentState = [{
      code: "XXX", currency: "XXX", id: 1
    }];
    const action = {
      type: actionTypes.NOTIFICATION_DELETED,
      notificationId: 1
    }
    
    expect(reducer(currentState, action)).toEqual([]);  
  });

  it('should handle NOTIFICATION_UPDATED action', () => {
    const currentState = [{
      code: "XXX", currency: "XXX", id: 1, is_active: true, threshold: "BELOW"
    }];
    const action = {
      type: actionTypes.NOTIFICATION_UPDATED,
      notification: {
        code: "XXX", currency: "XXX", id: 1, is_active: false, threshold: "BELOW"
      }
    }
    
    expect(reducer(currentState, action)).toEqual([action.notification]);  

  });
});