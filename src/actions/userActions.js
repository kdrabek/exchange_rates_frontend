import { browserHistory } from 'react-router';
import * as actionTypes from './actionTypes';
import Api from '../utils/api';
import { setUserInfo, removeUserInfo } from '../utils/localStorage';

const ratesApi = new Api();

export function loginUser(user){
  return function(dispatch){
    return ratesApi.login(user)
      .then(
        response => {
          if (response.token) {
            setUserInfo(response.token, user.email);
            dispatch(loginUserComplete(response));
            browserHistory.push('/');
          } else {
            dispatch(loginUserError(response));
          }
        }
      ).catch(
        err => dispatch(loginUserError(err))
      );
  }
}

export function registerUser(user){
  return function(dispatch){
    return ratesApi.register(user)
      .then(
        response => {
          if (response.token) {
            setUserInfo(response.token, user.email);
            dispatch(registerUserComplete(response));
            browserHistory.push('/');
          } else {
            dispatch(registerUserError(response));
          }
        }
      ).catch(
        err => dispatch(registerUserError(err))
      );
    }
}

export function logoutUser(){
  return function(dispatch){
    removeUserInfo();
    browserHistory.push('/');
    return dispatch(logoutUserComplete());
  }
}

export function loginUserComplete(response) {
  return {
    type: actionTypes.LOGIN_USER_COMPLETE,
    user: response,
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