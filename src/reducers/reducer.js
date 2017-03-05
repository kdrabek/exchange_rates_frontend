import { combineReducers } from 'redux';
import * as actionTypes from '../actions/actionTypes';
import { reducer as formReducer } from 'redux-form';

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
  console.log('wasssup bitches? reducer here', action.type);
  switch (action.type) {
    case actionTypes.LOGIN_USER_ERROR: {
      return {
        ...state,
        apiError: action.err,
        user: action.user,
        authenticated: action.authenticated
      };
    }
    case actionTypes.LOGIN_USER_COMPLETE: {
      console.log('siemka, skad klikasz, ja z reducera', action);
      return {
        ...state,
        apiError: action.err,
        user: action.user,
        authenticated: action.authenticated
      }
    } 
    case actionTypes.LOGOUT_USER_COMPLETE: {
      console.log('hejka, tutaj reducer', action);
      return {
        ...state,
        apiError: action.err,
        user: action.user,
        authenticated: action.authenticated
      }
    }       
    default:
      return state
  }
}


export default combineReducers({
  rates,
  ratesDetails,
  user,
  form: formReducer
});
