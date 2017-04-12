import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { Details } from '../Details';

import { LocalStorageMock, removeUserInfo} from '../../../utils/localStorage';
global.localStorage = new LocalStorageMock;

describe('Details component', () => {

  beforeEach(()=>{
    removeUserInfo();
  });

  it('matches the snapshot', () => {
    const ratesDetails = [{
      currency: 'XXX',
      country: 'XXX country',
      name: 'XXX money',
      rate: '3.9169',
      date: '2017-04-11',
      relative_change: '-0.0090'
    }];
    
    const tree = renderer.create(
      <Details 
        ratesDetails={ratesDetails} 
        tableDate='2017-04-11'
        loadRatesForCurrency={() => {}}
        routeParams={{currencyCode: 'XXX'}}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

})
