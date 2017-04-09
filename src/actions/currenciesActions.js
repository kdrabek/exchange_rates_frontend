import * as actionTypes from './actionTypes';
import Api from '../utils/api';

const ratesApi = new Api();

export function loadCurrencies(token) {
  return function (dispatch) {
    return ratesApi.getCurrencies(token)
      .then(
        response => dispatch(currenciesLoaded(response.currencies))
      ).catch(
        err => {throw err; }
      );
  };
}

export function currenciesLoaded(currencies) {
  return {
    type: actionTypes.CURRENCIES_LOADED, 
    currencies
  };
}