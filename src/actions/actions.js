import { browserHistory } from 'react-router';
import * as actionTypes from './actionTypes';
import Api from '../utils/api';

const ratesApi = new Api();

export function loadRates(){
  return function(dispatch) {
    return ratesApi.getCurrentRates()
      .then(rates =>{
        dispatch(ratesLoaded(rates));
      })
      .catch(err => { throw err; });
  };
}

export function loadRatesForDate(date){
  return function(dispatch) {
    return ratesApi.getRatesForDate(date)
      .then(rates =>{ dispatch(ratesLoaded(rates)); })
      .catch(err => { throw err; });
  };
}

export function loadRatesForCurrency(token, currency, days = 5){
  return function(dispatch) {
    return ratesApi.getRatesForCurrency(token, currency, days)
      .then(rates_details =>{
        console.log('action loadRatesForCurrency: ', rates_details);
        dispatch(ratesDetailsLoaded(rates_details));
      })
      .catch(err => { throw err; });
  };
}

export function ratesLoaded(rates) {
  return {
    type: actionTypes.RATES_LOADED, rates
  };
}

export function ratesDetailsLoaded(rates_details) {
  return {
    type: actionTypes.RATES_DETAILS_LOADED, rates_details
  };
}

export function loginUser(user){
  return function(dispatch){
    return ratesApi.login(user)
      .then(loggedInUser =>{
        localStorage.setItem('AuthUserToken', loggedInUser.token);
        localStorage.setItem('AuthUserEmail', user.email);
        dispatch(loginUserComplete(loggedInUser));
        browserHistory.push('/');
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
      .then(notifications => {
        dispatch(notificationsLoaded(notifications));
      })
      .catch(err => { throw err; });
  };
}

export function notificationsLoaded(notifications) {
  return {
    type: actionTypes.NOTIFICATIONS_LOADED, notifications
  };
}  