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

export function loadRatesForCurrency(currency, days = 5){
  console.log('dispatching action: loadRatesForCurrency');
  return function(dispatch) {
    return ratesApi.getRatesForCurrency(currency, days)
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
        localStorage.setItem('AuthToken', loggedInUser.token);
        dispatch(loginUserComplete(loggedInUser));
      })
      .catch(err => {
        dispatch(loginUserError(err));
      });
  }
}

export function loginUserComplete(loggedInUser) {
  return {
    type: actionTypes.LOGIN_USER_COMPLETE, user: loggedInUser
  }
}

export function loginUserError(err) {
  return {
    type: actionTypes.LOGIN_USER_ERROR, err: err.error
  }
}