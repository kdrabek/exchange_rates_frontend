import * as actionTypes from '../actions/actionTypes';

export const currencies = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CURRENCIES_LOADED: {
      return {
        ...state,
        currencies: action.currencies.currencies
      };
    }
    default:
      return state;
  }
};