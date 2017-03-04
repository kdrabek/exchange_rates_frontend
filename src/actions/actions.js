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
