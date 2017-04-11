import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as actions from '../ratesActions';
import * as types from '../actionTypes';
import { BASE_API_URL } from '../../utils/api';

const mockStore = configureMockStore([ thunk ]);

describe('Rates Actions', () => {
  
  afterEach(() => {
    nock.cleanAll()
  });

  it('dispatches RATES_LOADED when fetching rates is complete', () => {
    const store = mockStore({ rates: [] })
    const apiResponse = { 
      rates: [{currency: 'ABC', rate: 1.23}], 
      table_date: 'YYYY-MM-DD'
    }; 
      
    nock(BASE_API_URL).get('/rates/rates').reply(200, apiResponse);

    const expectedActions = [{
      type: types.RATES_LOADED, 
      rates: apiResponse.rates, 
      tableDate: apiResponse.table_date
    }];

    return store.dispatch(actions.loadRates()).then(
      () => expect(store.getActions()).toEqual(expectedActions)
      );
    });

  it('dispatches RATES_LOADED when fetching rates for date is complete', () => {
    const store = mockStore({ rates: [] })
    const apiResponse = { 
      rates: [{currency: 'ABC', rate: 1.23}], 
      tableDate: 'YYYY-MM-DD'
    }; 
      
    nock(BASE_API_URL).get('/rates/rates/YYYY-MM-DD').reply(200, apiResponse);

    const expectedActions = [{
      type: types.RATES_LOADED, 
      rates: apiResponse.rates, 
      tableDate: apiResponse.table_date
    }];

    return store.dispatch(actions.loadRatesForDate('YYYY-MM-DD')).then(
      () => expect(store.getActions()).toEqual(expectedActions)
      );
    });

  it('dispatches RATES_DETAILS_LOADED when fetching rates for currency is complete', () => {
    const store = mockStore({ rates: [] })
    const apiResponse = { 
      rates: [{currency: 'ABC', rate: 1.23}], 
      limit: 1
    }; 
      
    nock(BASE_API_URL).get('/rates/rates/ABC/limit/1').reply(200, apiResponse);

    const expectedActions = [{
      type: types.RATES_DETAILS_LOADED, 
      rates: apiResponse.rates, 
      limit: apiResponse.limit
    }];

    return store.dispatch(actions.loadRatesForCurrency('token', 'ABC', 1)).then(
      () => expect(store.getActions()).toEqual(expectedActions)
    );
  });
  
})