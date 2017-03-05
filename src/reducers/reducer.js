import { combineReducers } from 'redux';
import * as actionTypes from '../actions/actionTypes';

const rates = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.RATES_LOADED: {
      return {
        ...state,
        'rates': action.rates.rates,
        'tableDate': action.rates.table_date
      };
    }
    default:
      return state;
  }
};

function ratesDetails(state = {}, action) {
  switch (action.type) {
    case actionTypes.RATES_DETAILS_LOADED: {
      return {
        ...state,
        'rates': action.rates_details.rates,
        'limit': action.rates_details.limit
      };
    }
    default:
      return state
  }
}

function user(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOGIN_USER_ERROR: {
      return {
        ...state,
        'error': action.err
      };
    }
    default:
      return state
  }
}


export default combineReducers({
  rates,
  ratesDetails,
  user
});
