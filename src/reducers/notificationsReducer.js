import * as actionTypes from '../actions/actionTypes';

export const notifications = (state = [], action) => {

  switch (action.type) {
    case actionTypes.NOTIFICATIONS_LOADED: {
      return [...action.notifications];
    }

    case actionTypes.NOTIFICATION_DELETED: {
      return [
        ...state.filter(notification => notification.id !== action.notificationId)
      ];
    }

    case actionTypes.NOTIFICATION_UPDATED: {
      const newNotifications = [...state];
      const notificationToUpdate = newNotifications.findIndex(
        notification => notification.id === action.notification.id);
      newNotifications[notificationToUpdate] = action.notification;

      return [...newNotifications];
    }

    case actionTypes.NOTIFICATION_ADDED: {
      const addedNotification = {
        ...action.notification,
        currency: action.notification.code,
        id: action.notification.id
      }; // inconsistent API, need to be changed on backend
  
      return [...state, addedNotification];
    }
    default:
      return state;
  }
};