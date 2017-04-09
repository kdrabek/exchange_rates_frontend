import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as actions from '../currenciesActions';
import * as types from '../actionTypes';
import { BASE_API_URL } from '../../utils/api';

const mockStore = configureMockStore([ thunk ]);

describe('Rates Actions', () => {
  
  afterEach(() => {
    nock.cleanAll()
  });

  it('dispatches CURRENCIES_LOADED when fetching currencies is complete', () => {
    const store = mockStore({ rates: [] })
    const apiResponse = {
      currencies: [{
        code: "ABC",
        name: "awesome currency",
        country: "Country",
        table_type: "A"
      }]
    };
      
    nock(BASE_API_URL).get('/rates/currency').reply(200, apiResponse);

    const expectedActions = [{
      type: types.CURRENCIES_LOADED, 
      currencies: apiResponse.currencies, 
    }];

    return store.dispatch(actions.loadCurrencies('token')).then(
      () => expect(store.getActions()).toEqual(expectedActions)
      );
    });
  
})