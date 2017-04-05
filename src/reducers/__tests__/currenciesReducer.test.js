import { currencies as reducer } from '../currenciesReducer';
import * as actionTypes from '../../actions/actionTypes';

describe('currencies reducer', () => {

  it('should return initial state', () => {
    expect(
      reducer(undefined, {})
      ).toEqual([]);
  });

  it('should handle CURRENCIES_LOADED action', () => {
    const action = {
      type: actionTypes.CURRENCIES_LOADED, 
      currencies: [
        {name: 'some_currency'}
      ]
    };
    expect(
      reducer([], action)
      ).toEqual(action.currencies);
  });
});