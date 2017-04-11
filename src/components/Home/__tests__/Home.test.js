import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { Home } from '../Home';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key];
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    this.store[key] = undefined;
  }
};

global.localStorage = new LocalStorageMock;

describe('Home component', () => {

  it('matches the snapshot', () => {
    const rates = {
      tableDate: '2017-04-11',
      rates:[{country: "XXX", currency: "XYZ", name: "name", rate: "1.23"}]
    };
    
    const tree = renderer.create(
      <Home 
        rates={rates} 
        tableDate="2017-04-11"
        loadRates={() => {}}
        loadRatesForDate={() => {}}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

})
