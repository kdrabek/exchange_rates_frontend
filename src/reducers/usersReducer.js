import * as actionTypes from '../actions/actionTypes';

export const user = (state = {}, action) => {
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
      return {
        ...state,
        apiError: action.err,
        user: action.user,
        authenticated: action.authenticated
      }
    } 
    case actionTypes.LOGOUT_USER_COMPLETE: {
      return {
        ...state,
        apiError: action.err,
        user: action.user,
        authenticated: action.authenticated
      }
    }
    case actionTypes.REGISTER_USER_ERROR: {
      return {
        ...state,
        apiError: action.err,
        user: action.user,
        authenticated: action.authenticated
      };
    }
    case actionTypes.REGISTER_USER_COMPLETE: {
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
