import { user as reducer } from '../usersReducer';
import * as actionTypes from '../../actions/actionTypes';

describe('user reducer', () => {

  const prepareExpectedState = (action) => {
    return {
      apiError: action.err,
      user: action.user,
      authenticated: action.authenticated
    }
  };

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle LOGIN_USER_COMPLETE action', () => {
    const action = {
      type: actionTypes.LOGIN_USER_COMPLETE, 
      user: {email: 'test@user.com'},
      err: null,
      authenticated: true
    };

    const expectedState = prepareExpectedState(action);

    expect(reducer({}, action)).toEqual(expectedState);
  });

  it('should handle LOGIN_USER_ERROR action', () => {
    const action = {
      type: actionTypes.LOGIN_USER_ERROR, 
      user: null,
      err: {error: 'some_error'},
      authenticated: false
    };

    const expectedState = prepareExpectedState(action);

    expect(reducer({}, action)).toEqual(expectedState);
  });

  it('should handle LOGOUT_USER_COMPLETE action', () => {
    const action = {
      type: actionTypes.LOGOUT_USER_COMPLETE, 
      user: null,
      err: null,
      authenticated: false
    };

    const expectedState = prepareExpectedState(action);

    expect(reducer({}, action)).toEqual(expectedState);
  });

  it('should handle REGISTER_USER_COMPLETE action', () => {
    const action = {
      type: actionTypes.REGISTER_USER_COMPLETE, 
      user: {email: 'test@user.com'},
      err: null,
      authenticated: true
    };

    const expectedState = prepareExpectedState(action);

    expect(reducer({}, action)).toEqual(expectedState);
  });

  it('should handle REGISTER_USER_ERROR action', () => {
    const action = {
      type: actionTypes.REGISTER_USER_ERROR, 
      user: null,
      err: {error: 'some_error'},
      authenticated: false
    };

    const expectedState = prepareExpectedState(action);

    expect(reducer({}, action)).toEqual(expectedState);
  });

});
