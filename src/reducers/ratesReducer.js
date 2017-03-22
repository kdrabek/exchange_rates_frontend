import * as actionTypes from '../actions/actionTypes';

export const rates = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.RATES_LOADED: {
      return {
        ...state,
        rates: action.rates.rates,
        tableDate: action.rates.table_date
      };
    }
    default:
      return state;
  }
};

export const ratesDetails = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.RATES_DETAILS_LOADED: {
      return {
        ...state,
        rates: action.rates_details.rates,
        limit: action.rates_details.limit
      };
    }
    default:
      return state
  }
}
