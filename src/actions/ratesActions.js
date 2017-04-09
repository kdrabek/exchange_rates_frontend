import * as types from './actionTypes';
import Api from '../utils/api';

const ratesApi = new Api();

export function loadRates(){
  return function(dispatch) {
    return ratesApi.getCurrentRates()
      .then(
        response => dispatch(ratesLoaded(response))
      ).catch(
        err => { throw err; }
      );
  };
}

export function loadRatesForDate(date){
  return function(dispatch) {
    return ratesApi.getRatesForDate(date)
      .then(
        response => dispatch(ratesLoaded(response))
      ).catch(
        err => { throw err; }
      );
  };
}

export function loadRatesForCurrency(token, currency, days = 5){
  return function(dispatch) {
    return ratesApi.getRatesForCurrency(token, currency, days)
      .then(
        response => dispatch(ratesDetailsLoaded(response))
      ).catch(
        err => { throw err; }
      );
  };
}

export function ratesLoaded(response) {
  return {
    type: types.RATES_LOADED, 
    rates: response.rates, 
    tableDate: response.table_date
  };
}

export function ratesDetailsLoaded(response) {
  return {
    type: types.RATES_DETAILS_LOADED,
    rates: response.rates,
    limit: response.limit
  };
}
