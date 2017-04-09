import * as actionTypes from './actionTypes';
import Api from '../utils/api';

const ratesApi = new Api();

export function loadNotifications(token){
  return function(dispatch) {
    return ratesApi.getNotifications(token)
      .then(response => {
        dispatch(notificationsLoaded(response.notifications));
      })
      .catch(err => { throw err; });
  };
}

export function notificationsLoaded(notifications) {
  return {
    type: actionTypes.NOTIFICATIONS_LOADED, notifications
  };
}  

export function deleteNotification(token, notificationId){
  return function(dispatch) {
    return ratesApi.deleteNotification(token, notificationId)
      .then(() => {
        dispatch(notificationDeleted(notificationId));
      })
      .catch(err => { throw err; });
  };
}

export function notificationDeleted(notificationId) {
  return {
    type: actionTypes.NOTIFICATION_DELETED, notificationId
  };
}  

export function updateNotification(token, notification){
  return function(dispatch) {
    return ratesApi.updateNotification(token, notification)
      .then(response => dispatch(notificationUpdated(response)))
      .catch(err => { throw err; });
  };
}

export function addNotification(token, notification){
  return function(dispatch) {
    return ratesApi.addNotification(token, notification)
      .then(response => dispatch(notificationAdded(response)))
      .catch(err => { throw err; });
  };
}

export function notificationUpdated(notification) {
  return {
    type: actionTypes.NOTIFICATION_UPDATED, notification
  };
}

export function notificationAdded(notification) {
  return {
    type: actionTypes.NOTIFICATION_ADDED, notification
  };
}