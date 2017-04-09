import { browserHistory } from 'react-router';
import * as actionTypes from './actionTypes';
import Api from '../utils/api';

const ratesApi = new Api();

export function loginUser(user){
  return function(dispatch){
    return ratesApi.login(user)
      .then(response =>{
        if (response.token) {
          localStorage.setItem('AuthUserToken', response.token);
          localStorage.setItem('AuthUserEmail', user.email);
          dispatch(loginUserComplete(response));
          browserHistory.push('/');
        };
        dispatch(loginUserError(response));
      })
      .catch(err => {
        dispatch(loginUserError(err));
      });
  }
}

export function registerUser(user){
  return function(dispatch){
    return ratesApi.register(user)
      .then(registeredUser =>{
        localStorage.setItem('AuthUserToken', registeredUser.token);
        localStorage.setItem('AuthUserEmail', user.email);
        dispatch(registerUserComplete(registeredUser));
        browserHistory.push('/');
      })
      .catch(err => {
        dispatch(registerUserError(err));
      });
  }
}

export function logoutUser(){
  return function(dispatch){
    localStorage.removeItem('AuthUserToken');
    localStorage.removeItem('AuthUserEmail');
    dispatch(logoutUserComplete());
    browserHistory.push('/');
  }
}

export function loginUserComplete(loggedInUser) {
  return {
    type: actionTypes.LOGIN_USER_COMPLETE,
    user: loggedInUser,
    err: null,
    authenticated: true
  }
}

export function loginUserError(err) {
  return {
    type: actionTypes.LOGIN_USER_ERROR,
    user: null,
    err: err.error,
    authenticated: false
  }
}

export function logoutUserComplete() {
  return {
    type: actionTypes.LOGOUT_USER_COMPLETE,
    user: null,
    err: null,
    authenticated: false
  }
}

export function registerUserComplete(user) {
  return {
    type: actionTypes.REGISTER_USER_COMPLETE,
    user: user,
    err: null,
    authenticated: true
  }
}

export function registerUserError(err) {
  return {
    type: actionTypes.REGISTER_USER_ERROR,
    user: null,
    err: err.error,
    authenticated: false
  }
}

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

export function loadCurrencies(token) {
  return function (dispatch) {
    return ratesApi.getCurrencies(token)
      .then(response => {
        dispatch(currenciesLoaded(response.currencies));
      })
      .catch(err => {
        throw err;
      });
  };
}

export function currenciesLoaded(currencies) {
  return {
    type: actionTypes.CURRENCIES_LOADED, currencies
  };
}