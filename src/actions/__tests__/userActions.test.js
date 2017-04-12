import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as actions from '../userActions';
import * as types from '../actionTypes';
import { BASE_API_URL } from '../../utils/api';
import { LocalStorageMock, removeUserInfo } from '../../utils/localStorage';
global.localStorage = new LocalStorageMock;

const mockStore = configureMockStore([ thunk ]);
const testUser = {email: 'test@gmail.com', password: 'password'};


describe('User Actions', () => {

  beforeEach(()=>{
    removeUserInfo();
  });

  afterEach(() => {
    nock.cleanAll()
  });

  it('dispatches LOGIN_USER_COMPLETE when user is authenticated', () => {
    const store = mockStore({ user: {} });
    const apiResponse = {id: 1, token: 'token'};
      
    nock(BASE_API_URL).post('/auth/login').reply(200, apiResponse);

    const expectedActions = [{
      type: types.LOGIN_USER_COMPLETE, 
      user: apiResponse,
      err: null,
      authenticated: true
    }];

    return store.dispatch(actions.loginUser(testUser)).then(
      () => expect(store.getActions()).toEqual(expectedActions)
    );
  });

  it('dispatches LOGIN_USER_ERROR when user is not authenticated', () => {
    const store = mockStore({ user: {} });
    const apiResponse = {error: 'Credentials not valid'};
      
    nock(BASE_API_URL).post('/auth/login').reply(400, apiResponse);

    const expectedActions = [{
      type: types.LOGIN_USER_ERROR, 
      user: null,
      err: apiResponse.error,
      authenticated: false
    }];

    return store.dispatch(actions.loginUser(testUser)).then(
      () => expect(store.getActions()).toEqual(expectedActions)
    );
  });

  it('dispatches REGISTER_USER_COMPLETE when user is authenticated', () => {
    const store = mockStore({ user: {} });
    const apiResponse = {id: 1, token: 'token'};
      
    nock(BASE_API_URL).post('/auth/register').reply(200, apiResponse);

    const expectedActions = [{
      type: types.REGISTER_USER_COMPLETE, 
      user: apiResponse,
      err: null,
      authenticated: true
    }];

    return store.dispatch(actions.registerUser(testUser)).then(
      () => expect(store.getActions()).toEqual(expectedActions)
    );
  });

  it('dispatches REGISTER_USER_ERROR when user is not authenticated', () => {
    const store = mockStore({ user: {} });
    const apiResponse = {error: 'Credentials not valid'};
      
    nock(BASE_API_URL).post('/auth/register').reply(400, apiResponse);

    const expectedActions = [{
      type: types.REGISTER_USER_ERROR, 
      user: null,
      err: apiResponse.error,
      authenticated: false
    }];

    return store.dispatch(actions.registerUser(testUser)).then(
      () => expect(store.getActions()).toEqual(expectedActions)
    );
  });

  it('dispatches LOGOUT_USER_COMPLETE when user is not authenticated', () => {
    const store = mockStore({ user: {} });

    const expectedAction = {
      type: types.LOGOUT_USER_COMPLETE, 
      user: null,
      err: null,
      authenticated: false
    };

    expect(store.dispatch(actions.logoutUser())).toEqual(expectedAction);
  });

})