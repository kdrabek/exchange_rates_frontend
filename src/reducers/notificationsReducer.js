import * as actionTypes from '../actions/actionTypes';

export const notifications = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.NOTIFICATIONS_LOADED: {
      return {
        ...state,
        notifications: action.notifications.notifications
      };
    }
    case actionTypes.NOTIFICATION_DELETED: {
      return {
        ...state,
        notifications: state.notifications.filter(
          notification => notification.id !== action.notificationId)
      };
    }
    case actionTypes.NOTIFICATION_UPDATED: {
      const newNotifications = [...state.notifications];
      const notificationToUpdate = newNotifications.findIndex(
        notification => notification.id === action.notification.id);
      newNotifications[notificationToUpdate] = action.notification;

      return {
        ...state,
        notifications: newNotifications
      };
    }

    case actionTypes.NOTIFICATION_ADDED: {
      const addedNotification = {
        ...action.notification,
        currency: action.notification.code,
        id: action.notificationId
      }; // inconsistent API, need to be changed on backend
      return {
        ...state,
        notifications: state.notifications.concat(addedNotification)
      };
    }
    default:
      return state;
  }
};