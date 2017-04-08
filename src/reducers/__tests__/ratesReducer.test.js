import { rates, ratesDetails } from '../ratesReducer';
import * as actionTypes from '../../actions/actionTypes';

describe('rates reducer', () => {

  it('should return initial state', () => {
    expect(
      rates(undefined, {})
      ).toEqual({});
  });

  it('should handle RATES_LOADED action', () => {
    const action = {
      type: actionTypes.RATES_LOADED, 
      rates: [{name: 'some_currency'}],
      tableDate: '2017-04-07'
    };

    const expectedState = {
      rates: action.rates,
      tableDate: action.tableDate
    }

    expect(rates({}, action)).toEqual(expectedState);
  });

});

describe('ratesDetails reducer', () => {

  it('should return initial state', () => {
    expect(
      ratesDetails(undefined, {})
      ).toEqual({});
  });

  it('should handle RATES_DETAILS_LOADED action', () => {
    const action = {
      type: actionTypes.RATES_DETAILS_LOADED, 
      rates: [{name: 'some_currency'}],
      limit: 1
    };

    const expectedState = {
      rates: action.rates,
      limit: action.limit
    }
    expect(
      ratesDetails({}, action)
      ).toEqual(expectedState);
  });

});