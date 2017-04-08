import * as actionTypes from '../actions/actionTypes';

export const rates = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.RATES_LOADED: {
      return {
        ...state,
        rates: action.rates,
        tableDate: action.tableDate
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
        rates: action.rates,
        limit: action.limit
      };
    }
    default:
      return state
  }
}
